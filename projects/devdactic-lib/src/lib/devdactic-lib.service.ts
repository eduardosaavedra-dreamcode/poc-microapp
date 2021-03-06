import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LibConfig, LibConfigService } from './devdactic-lib.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevdacticLibService {
  requestOptions = {
    headers: new HttpHeaders({
      Accept : 'microApp-1'
    }),
  };
  baseUrl = this.config.apiUrl;

  constructor(@Inject(LibConfigService) private config: LibConfig, private http: HttpClient) {
    console.log('My config: ', config);
  }
  getData() {
    return this.http.get<any>(`${this.baseUrl}/api`, this.requestOptions).pipe(
      map((res: any) => res.results[0])
    )
  }
}
