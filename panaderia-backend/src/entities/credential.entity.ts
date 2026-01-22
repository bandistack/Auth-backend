import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('credentials')
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  passwordHash: string;

  @Column({ default: 0 })
  failedAttempts: number;

  @Column({ nullable: true })
  lastLogin: Date;

  @OneToOne(() => User, (user) => user.credential)
  user: User;
}
