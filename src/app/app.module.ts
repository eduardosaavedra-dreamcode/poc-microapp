import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DevdacticLibModule } from 'devdactic-lib';
import { DevMobilityLibModule } from 'dev-mobility-lib';
import { environmentDevMobilityPoc } from 'src/environments/environmentDevMobilityPoc';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    DevdacticLibModule.forRoot({
      apiUrl: 'https://randomuser.me'
    }),
    DevMobilityLibModule.forRoot(environmentDevMobilityPoc),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
