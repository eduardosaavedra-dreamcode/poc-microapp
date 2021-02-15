import { Inject, Injectable } from '@angular/core';
import { environmentService } from './dev-mobility-lib.module';
import { IEnvironment } from './interfaces/environment';

@Injectable({
  providedIn: 'root'
})
export class DevMobilityLibService {

  constructor(@Inject(environmentService) private environment: IEnvironment) { }

  getEnvironment(){
    return this.environment;
  }
  
}
