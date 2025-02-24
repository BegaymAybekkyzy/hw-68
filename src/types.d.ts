export interface TaskForm {
  text: string;
  status: boolean;
}

export interface Task extends TaskForm {
  id: string;
}

export interface TaskAPI {
  [id: string]: TaskForm;
}
