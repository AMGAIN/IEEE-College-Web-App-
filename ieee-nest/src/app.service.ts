import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  mainRoute(): string {
    return 'IEEE backend is running';
  }
}
