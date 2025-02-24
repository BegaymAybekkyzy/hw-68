import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task, TaskAPI, TaskForm } from "../../types";
import axiosApi from "../../axiosApi.ts";

export const fetchTasks = createAsyncThunk<Task[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await axiosApi<TaskAPI>("tasks.json");
    const idTasks = Object.keys(response.data);
    const tasksArray: Task[] = idTasks.map((idOrKey) => {
      return {
        id: idOrKey,
        ...response.data[idOrKey],
      };
    });
    return tasksArray;
  },
);

export const taskSubmit = createAsyncThunk<void, TaskForm>(
  "tasks/taskSaving",
  async (task) => {
    await axiosApi.post("tasks.json", task);
  },
);

export const taskDelete = createAsyncThunk<string, string>(
  "tasks/taskDelete",
  async (id) => {
    await axiosApi.delete(`tasks/${id}.json`);
    return id;
  },
);

export const tasksSave = createAsyncThunk<void, Task[]>(
  "tasks/tasksSave",
  async (tasks) => {
    const updatedTasks = tasks.reduce(
      (acc, task) => {
        acc[task.id] = task;
        return acc;
      },
      {} as Record<string, Task>,
    );
    await axiosApi.put("tasks.json", updatedTasks);
  },
);
