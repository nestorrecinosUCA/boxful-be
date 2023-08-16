import { MongooseModule } from '@nestjs/mongoose';
import configuration from '@Config/configuration';

const { uri } = configuration().database;

export const MongoConnection = MongooseModule.forRoot(uri);
