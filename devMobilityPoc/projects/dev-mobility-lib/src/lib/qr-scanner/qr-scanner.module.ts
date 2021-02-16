import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QrScannerComponent } from './qr-scanner.component';
import { QrScannerRoutingModule } from './qr-scanner-routing.module';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerRoutingModule,
  ],
  declarations: [QrScannerComponent]
})
export class QrScannerModule {}