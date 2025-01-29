import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExportModule } from './_export/export.module'
import { FilterModule } from './_filter/filter.module'
import { AbitsModule } from './abits/abits.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommissionModule } from './commission/commission.module'
import { EducationModule } from './education/education.module'
import { InstitutesModule } from './education/institutes.module'
import { EgeMarksModule } from './ege/egeMarks.module'
import { EntranceTestModule } from './entranceTest/entranceTest.module'
import { ExaminationGroupModule } from './examinationGroup/examinationGroup.module'
import { FamilyModule } from './family/family.module'
import { StatusesModule } from './family/statuses.module'
import { HistoryModule } from './history/history.module'
import { LocationsModule } from './locations/locations.module'
import { MilitaryCommissariatModule } from './militaryCommissariat/militaryCommissariat.module'
import { MilitaryServiceModule } from './militaryService/militaryService.module'
import { PassportIssuedByModule } from './passport/passportIssuedBy.module'
import { PersonalAchievementsModule } from './personalAchievements/personalAchievements.module'
import { ReasonsModule } from './reasonExpulsion/reasons.module'
import { SchoolMarksModule } from './schoolMarks/schoolMarks.module'
import { SportModule } from './sport/sport.module'
import { TelephoneModule } from './telephone/telephone.module'
import { AuthModule } from './users/auth.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '192.168.8.40',
    //   port: 3306,
    //   username: 'root',
    //   password: '12345',
    //   database: 'Abit-2025',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   synchronize: false,
    //   dropSchema: false,
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
    ExportModule,
    FilterModule,

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
    InstitutesModule,
    PassportIssuedByModule,
    StatusesModule,
    ReasonsModule,
    LocationsModule,
    EducationModule,
    MilitaryServiceModule,
    UsersModule,
    AuthModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
