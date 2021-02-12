import { NgModule } from '@angular/core';
import { HeaderFooterLibComponent } from './header-footer-lib.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderFooterLibComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderFooterLibComponent, FooterComponent]
})
export class HeaderFooterLibModule { }
