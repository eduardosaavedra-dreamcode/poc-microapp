import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DevdacticLibModule } from 'devdactic-lib';
import { DevMobilityLibModule } from 'dev-mobility-lib';
import { environmentDevMobilityPoc } from 'src/environments/environmentDevMobilityPoc';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './provider/interceptor/interceptor.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    DevdacticLibModule.forRoot({
      apiUrl: 'https://randomuser.me'
    }),
    DevMobilityLibModule.forRoot(environmentDevMobilityPoc),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
