import { NgModule } from '@angular/core';
import { HeaderFooterLibComponent } from './header-footer-lib.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderFooterLibComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderFooterLibComponent, FooterComponent, HeaderComponent]
})
export class HeaderFooterLibModule { }
