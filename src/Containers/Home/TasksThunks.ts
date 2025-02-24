import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskForm } from '../../types';
import axiosApi from '../../axiosApi.ts';



export const taskSaving = createAsyncThunk<void, TaskForm>(
  "tasks/taskSaving",
  async (task) => {
    await axiosApi.post("tasks.json", task);
  }
);