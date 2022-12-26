import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { TeamsModule } from './teams/teams.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, DriversModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
