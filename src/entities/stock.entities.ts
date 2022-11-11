import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stock")
export class Stock {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type:"date"})
  date: Date;

  @Column({type:"decimal"})
  open: number 

  @Column({type:"decimal"})
  high: number
  
  @Column({type:"decimal"})
  low: number

  @Column({type:"decimal"})
  volume:number
}
