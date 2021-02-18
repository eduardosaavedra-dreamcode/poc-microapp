import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QrScannerComponent } from './qr-scanner.component';
import { QrScannerRoutingModule } from './qr-scanner-routing.module';
import { HeaderFooterLibModule } from 'header-footer-lib';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerRoutingModule,
    HeaderFooterLibModule
  ],
  declarations: [QrScannerComponent]
})
export class QrScannerModule {}