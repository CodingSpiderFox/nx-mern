import * as mongoose from 'mongoose';

export interface CustomerProps extends mongoose.Document {
  name: string;
}

export interface UserProps extends mongoose.Document {
  email: string;
  passwordHash: string;
}
