// database.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const url = 'mongodb+srv://admin:answjddn123@cluster0.bqa71ft.mongodb.net/?retryWrites=true&w=majority';
const options: MongoClientOptions = {}; // Check if omitting options resolves the issue

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongo) {
    (global as any)._mongo = MongoClient.connect(url, options);
  }
  connectDB = (global as any)._mongo;
} else {
  connectDB = MongoClient.connect(url, options);
}

export { connectDB };
