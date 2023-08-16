import { MongooseModule } from '@nestjs/mongoose';
import configuration from '@Config/configuration';

const { host, port, database, username, password } = configuration().database;

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;
export const MongoConnection = MongooseModule.forRoot(uri);
