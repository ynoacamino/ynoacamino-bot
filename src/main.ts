import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = Number(process.env.PORT) || 3000;

  app.enableCors({
    origin: 'https://alert.ynoacamino.site',
    methods: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(port, '0.0.0.0');
}
bootstrap();
