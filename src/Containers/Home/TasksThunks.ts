import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task, TaskAPI, TaskForm } from '../../types';
import axiosApi from '../../axiosApi.ts';

export const fetchTasks = createAsyncThunk<Task[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await axiosApi<TaskAPI>("tasks.json");
    const idTasks = Object.keys(response.data);
    const tasksArray: Task[] = idTasks.map((idOrKey)=> {
      return {
        id: idOrKey,
        ...response.data[idOrKey],
      };
    });
    return tasksArray;
  }
);

export const taskSaving = createAsyncThunk<void, TaskForm>(
  "tasks/taskSaving",
  async (task) => {
    await axiosApi.post("tasks.json", task);
  }
);