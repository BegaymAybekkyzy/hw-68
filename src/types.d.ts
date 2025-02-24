export interface TaskForm {
  taskText: string;
  taskStatus: false;
}

export interface TaskAPI {
  [id: string]: TaskState;
}