import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('history')
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  abitId: number; // Название сущности (таблицы)

  @Column('simple-json')
  oldValue: any;

  @Column('simple-json')
  newValue: any;

  @Column()
  changedBy: string; // Пользователь, совершивший действие

  @CreateDateColumn()
  changedAt: Date; // Время изменения
}