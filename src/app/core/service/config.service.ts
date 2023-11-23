import { SAB_CONFIG } from './keys';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../environment';

const getKeyValue = (key: string, data) => {
  if (!data) {
    return null;
  }

  if (key.indexOf('.') < 0) {
    return data[key];
  }

  const keys = key.split('.');

  return getKeyValue(keys.slice(1).join('.'), data[keys[0]]);
};

@Injectable()
export class ConfigService {
  config: any;

  constructor(@Inject(SAB_CONFIG) config: any) {
    this.config = config;
  }

  getConfig(key: keyof typeof environment.config) {
    return getKeyValue(key.toString(), this.config);
  }
}
