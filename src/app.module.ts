import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackagesController } from './packages/packages.controller';
import { PackagesModule } from './packages/packages.module';
import { Package } from './entities/package.entity'
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eDesk',
      entities: [ Package ],
      synchronize: false,
      migrations: [
        "migrations/*.js"
      ],
    }),
    PackagesModule,
  ],
  controllers: [AppController, PackagesController],
  providers: [AppService],
})
export class AppModule {}
