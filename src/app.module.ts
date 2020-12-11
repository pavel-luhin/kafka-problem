import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ListenerController} from "./listener.controller";

@Module({
    imports: [],
    controllers: [AppController, ListenerController],
})
export class AppModule {
}
