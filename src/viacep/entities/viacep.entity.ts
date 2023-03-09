import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Viacep {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'cep',
    nullable: false,
    type: 'varchar'
  })
  cep: string;

  @Column({
    name: 'logradouro',
    nullable: false,
    type: 'varchar'
  })
  logradouro: string;

  @Column({
    name: 'complemento',
    nullable: false,
    type: 'varchar'
  })
  complemento: string;

  @Column({
    name: 'bairro',
    nullable: false,
    type: 'varchar'
  })
  bairro: string;

  @Column({
    name: 'localidade',
    nullable: false,
    type: 'varchar'
  })
  localidade: string;

  @Column({
    name: 'uf',
    nullable: false,
    type: 'varchar'
  })
  uf: string;

  @Column({
    name: 'ibge',
    nullable: false,
    type: 'varchar'
  })
  ibge: string;

  @Column({
    name: 'gia',
    nullable: false,
    type: 'varchar'
  })
  gia: string;

  @Column({
    name: 'ddd',
    nullable: false,
    type: 'varchar'
  })
  ddd: string;

  @Column({
    name: 'siafi',
    nullable: false,
    type: 'varchar'
  })
  siafi: string;
}