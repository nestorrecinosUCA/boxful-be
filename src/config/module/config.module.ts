import { ConfigModule } from '@nestjs/config';

import envValidationSchema from '../env-validation-schema';

export const ConfigModuleOptions = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  validationSchema: envValidationSchema,
});
