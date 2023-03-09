// nest
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
// endregion

// modules
import { ViacepModule } from './viacep/viacep.module';
// endregion

// app
import { AppController } from './app.controller';
import { AppService } from './app.service';
// endregion

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        "src/entities/**/*.ts"
      ],
      synchronize: false,
      autoLoadEntities: true,
      logging: false
    }),
    ViacepModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
