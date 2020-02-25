import { Document } from 'mongoose';

import { User } from './user';

export interface Article extends Document {
  author: User;
  title: string;
  image: string;
  description: string;
  created: Date;
}
