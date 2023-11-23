import { InjectionToken } from '@angular/core';
import { ConfigService } from './config.service';

export const SAB_CONFIG = new InjectionToken<ConfigService>('sab_config');

export const API_URL = new InjectionToken<string>('API_URL');
