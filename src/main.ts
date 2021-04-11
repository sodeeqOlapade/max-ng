import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Max Star War Movies')
    .setDescription('The Max-Ng Star War Movies API description')
    .setVersion('1.0')
    .addTag('max-starwars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

console.log('PORT: ', process.env.PORT);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
