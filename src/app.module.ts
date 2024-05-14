import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitsModule } from './abits/abits.module'
import { AddressesModule } from './addresses/addresses.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommissionModule } from './commission/commission.module'
import { EgeMarksModule } from './ege/egeMarks.module'
import { EntranceTestModule } from './entranceTest/entranceTest.module'
import { ExaminationGroupModule } from './examinationGroup/examinationGroup.module'
import { FamilyModule } from './family/family.module'
import { InstitutesModule } from './instituts/institutes.module'
import { MilitaryCommissariatModule } from './militaryCommissariat/militaryCommissariat.module'
import { PersonalAchievementsModule } from './personalAchievements/personalAchievements.module'
import { SchoolMarksModule } from './schoolMarks/schoolMarks.module'
import { SportModule } from './sport/sport.module'
import { TelephoneModule } from './telephone/telephone.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'my-sql',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
    }),
    AbitsModule,
    EgeMarksModule,
    MilitaryCommissariatModule,
    EntranceTestModule,
    SchoolMarksModule,
    SportModule,
    CommissionModule,
    ExaminationGroupModule,
    PersonalAchievementsModule,
    TelephoneModule,
    FamilyModule,
    AddressesModule,
    InstitutesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
