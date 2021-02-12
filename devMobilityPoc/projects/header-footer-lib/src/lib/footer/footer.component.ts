import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'dev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  constructor(private alertCtrl: AlertController, private toastController: ToastController) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.showAlert();
  }

  async showAlert() {
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure, you want to confirm it?',
      message: `Message from ${this.appName}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    })
    await alertElement.present();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: `Message from ${this.appName}`,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
