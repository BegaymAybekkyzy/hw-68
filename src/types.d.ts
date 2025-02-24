export interface TaskForm {
  taskText: string;
  taskStatus: boolean;
}

export interface Task extends TaskForm {
  id: string;
}

export interface TaskAPI {
  [id: string]: TaskForm;
}