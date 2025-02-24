import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  id: string;
  taskText: string;
  taskStatus: boolean;
}

const initialState: TaskState[] = [];

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {

  },
  // extraReducers: (builder) => {
  //
  // }
});
export const tasksReducer =  TasksSlice.reducer;
