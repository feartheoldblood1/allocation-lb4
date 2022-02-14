import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Date extends Model {
  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: 0,
      maximum: 100,
      errorMessage: "Percent cannot be less than 0 or more than 100",
    },
  })
  percent: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Date>) {
    super(data);
  }
}

export interface DateRelations {
  // describe navigational properties here
}

export type DateWithRelations = Date & DateRelations;
