import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as bodyParser from 'body-parser'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  const expressApp = app.getHttpAdapter().getInstance()
  expressApp.set('trust proxy', true)
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(2006)
}
bootstrap()
