import {Ctx, EventPattern, KafkaContext, Payload} from "@nestjs/microservices";
import {Controller, Logger} from "@nestjs/common";

@Controller()
export class ListenerController {

    private readonly log = new Logger(ListenerController.name);

    @EventPattern('test.topic')
    public async doWork(
        @Payload() request: any,
        @Ctx() context: KafkaContext
    ) {
        this.log.debug(`Received event ${JSON.stringify(request)}`);
        this.log.debug(`Kafka context is ${JSON.stringify(context)}`);
    }
}