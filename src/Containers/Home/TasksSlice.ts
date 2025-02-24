import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks } from './TasksThunks.ts';
import { Task } from '../../types';

export interface TaskState {
  loading: boolean;
  error: boolean;
  tasks: Task[];
}

const initialState: TaskState = {
  loading: false,
  error: false,
  tasks: [],
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error = false;
    }).addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      state.loading = false;
      state.error = false;
      state.tasks = action.payload;
    }).addCase(fetchTasks.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  }
});
export const tasksReducer = TasksSlice.reducer;
