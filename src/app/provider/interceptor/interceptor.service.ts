import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { mergeMap, tap } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storage: Storage, private alertCtrl: AlertController) { 
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let promise = this.storage.get('token');
    return from(promise).pipe(mergeMap(token => {
      let clonedReq = this.addToken(req, token);
      return next.handle(clonedReq).pipe(tap(
        success => {success.type==0?console.log('Interceptado servicio de '+req.headers.get('Accept')):''},
        async error => {
          if (error.status === 401) {
            // Unauthorized. You must ensure you receive a 401 error or something
          }
          let msg = error.message;
          await this.showAlert(msg)
          return error;
        }
      )
      );

    }));
  }

  private addToken( request: HttpRequest<any>, token: any){
    if(token){
      let clone: HttpRequest<any>;
      clone = request.clone({
        setHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization : `Bearer ${token}`
        }
      });
      return clone;
    }
    return request;
  }
  async showAlert(msg: string) {
    const alertElement = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancelar'
        }
      ]
    })
    await alertElement.present();
  }

}
