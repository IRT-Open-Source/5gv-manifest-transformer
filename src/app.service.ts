import { Injectable, HttpService, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);

  constructor(private http: HttpService) {}

  async getManifest(url: string): Promise<string> {
    this.logger.debug(`Transform manifest @ ${url}`);
    const manifest = (await this.http.get(url).toPromise()).data.replace(
      /\/\/[a-zA-Z0-9\-\.]*/g,
      match => match + '.cache.cache:8080',
    );
    return manifest;
  }
}
