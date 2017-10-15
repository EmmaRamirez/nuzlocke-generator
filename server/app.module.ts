import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats.module';

@Module({
  modules: [CatsModule]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(LoggerMiddleware).forRoutes(
        { path: '/cats', method: RequestMethod.GET },
        { path: '/cats', method: RequestMethod.POST }
      )
    }
}