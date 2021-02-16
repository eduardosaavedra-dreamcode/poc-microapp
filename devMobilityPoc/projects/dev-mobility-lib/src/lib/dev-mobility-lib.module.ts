import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { DevMobilityLibComponent } from './dev-mobility-lib.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IEnvironment } from './interfaces/environment';
import { CameraComponent } from './camera/camera.component';

export const environmentService = new InjectionToken<IEnvironment>('env');
@NgModule({
  declarations: [DevMobilityLibComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DevMobilityLibComponent]
})
export class DevMobilityLibModule {

  static forRoot(enviroment: IEnvironment): ModuleWithProviders<DevMobilityLibModule> {
    return {
      ngModule: DevMobilityLibModule,
      providers: [
        {
          provide: environmentService,
          useValue: enviroment
        }
      ]
    };
  }

}
