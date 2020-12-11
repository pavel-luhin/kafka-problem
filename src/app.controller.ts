import {Body, Controller, Get, Post} from '@nestjs/common';
import {Client, ClientKafka, Transport} from "@nestjs/microservices";

@Controller()
export class AppController {

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'test',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'test-group',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('test.topic');
    await this.client.connect();
  }

  @Post('/')
  getList(@Body() request: any) {
    console.log('request', request);
    return this.client.emit('test.topic', request);
  }
}
