import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AbitsModule } from './abits/abits.module'
import { AddressesModule } from './addresses/addresses.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommissionModule } from './commission/commission.module'
import { EducationModule } from './education/education.module'
import { EgeMarksModule } from './ege/egeMarks.module'
import { EntranceTestModule } from './entranceTest/entranceTest.module'
import { ExaminationGroupModule } from './examinationGroup/examinationGroup.module'
import { FamilyModule } from './family/family.module'
import { StatusesModule } from './family/statuses.module'
import { InstitutesModule } from './instituts/institutes.module'
import { LocationsModule } from './locations/locations.module'
import { MilitaryCommissariatModule } from './militaryCommissariat/militaryCommissariat.module'
import { MilitaryServiceModule } from './militaryService/militaryService.module'
import { PassportModule } from './passport/passport.module'
import { PassportIssuedByModule } from './passport/passportIssuedBy.module'
import { PersonalAchievementsModule } from './personalAchievements/personalAchievements.module'
import { ReasonsModule } from './reasonExpulsion/reasons.module'
import { SchoolMarksModule } from './schoolMarks/schoolMarks.module'
import { SportModule } from './sport/sport.module'
import { TelephoneModule } from './telephone/telephone.module'

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '192.168.8.40',
    //   port: 3306,
    //   username: 'firs',
    //   password: 'firs',
    //   database: 'test',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    //   dropSchema: true,
    // }),
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
    InstitutesModule,
    PassportIssuedByModule,
    StatusesModule,
    ReasonsModule,
    LocationsModule,
    EducationModule,
    MilitaryServiceModule,
    PassportModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
