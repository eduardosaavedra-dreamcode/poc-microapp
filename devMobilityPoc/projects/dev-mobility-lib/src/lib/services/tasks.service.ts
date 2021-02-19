import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { DevMobilityLibService } from '../dev-mobility-lib.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  private api: string;
  constructor(
    private http: HttpClient,
    private devMobilityLibService: DevMobilityLibService
  ) { 
    this.api = this.devMobilityLibService.getEnvironment().apiTasks;
  }

  getAllTasks() {
    const path = `${this.api}/todos/`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}/todos`;
    return this.http.post<Task>(path, task);
  }

  updateTask(task: Task) {
    const path = `${this.api}/todos/${task.id}`;
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/todos/${id}`;
    return this.http.delete(path);
  }
}