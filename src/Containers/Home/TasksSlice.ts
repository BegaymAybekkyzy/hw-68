import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchTasks,
  taskDelete,
  tasksSave,
  taskSubmit,
} from "./TasksThunks.ts";
import { Task } from "../../types";

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

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    check: (state, action: PayloadAction<string>) => {
      state.tasks.filter((task: Task) => {
        if (task.id === action.payload) task.status = !task.status;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.error = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(taskDelete.pending, (state) => {
        state.error = false;
      })
      .addCase(taskDelete.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.loading = false;
        state.error = false;
      })
      .addCase(taskDelete.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(tasksSave.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(tasksSave.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(tasksSave.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(taskSubmit.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(taskSubmit.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(taskSubmit.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const tasksReducer = tasksSlice.reducer;
export const { check } = tasksSlice.actions;
