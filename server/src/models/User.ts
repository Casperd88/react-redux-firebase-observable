import { prop, Typegoose } from "typegoose";

export class User extends Typegoose {
  @prop()
  name?: string;

  @prop({ required: true })
  age!: number;
}
