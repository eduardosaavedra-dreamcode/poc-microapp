import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Task } from '../interfaces/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'dev-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva tarea!',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: "Tarea"
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {
            this.createTask(data.title);
          }
        }
      ]
    });
    await alert.present();
  }

  createTask(title: string) {
    const task = {
      userId: `${this.tasks.length +1}`,
      title,
      completed: false
    };
    this.tasksService.createTask(task)
      .subscribe((newTask) => {
        this.tasks.unshift(newTask);
      });
  }

  deleteTask(id: string, index: number) {
    this.tasksService.deleteTask(id)
      .subscribe(() => {
        this.tasks.splice(index, 1);
        this.presentToast('Su tarea fue eliminada correctamente');
      });
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      position:'top',
      message,
      duration: 2000
    });
    await toast.present();
  }



}
