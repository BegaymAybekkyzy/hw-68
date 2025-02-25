import TaskForm from "../../components/TasksForm/TasksForm.tsx";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, taskDelete, tasksSave } from "./TasksThunks.ts";
import { AppDispatch, RootState } from "../../app/store.ts";
import Loader from "../../components/Loader/Loader.tsx";
import TaskCard from "../../components/TaskCard/TaskCard.tsx";
import { check } from "./TasksSlice.ts";

const Home = () => {
  const [formShow, setFormShow] = useState(false);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const tasksArray = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onchangeCheck = (id: string) => {
    dispatch(check(id));
  };

  const onDelete = async (id: string) => {
    await dispatch(taskDelete(id));
    await dispatch(fetchTasks());
  };

  const onSave = () => {
    dispatch(tasksSave(tasksArray));
  };

  const formDisplay = () => {
    setFormShow((prev) => !prev);
  };

  let content: React.ReactNode | null = null;
  const outstandingTasks = tasksArray.filter((task) => !task.status);
  const completedTasks = tasksArray.filter((task) => task.status);

  if (loading) content = <Loader />;
  if (!loading)
    content = (
      <main className="row row-cols-2">
        <div>
          <h1 className="text-center mb-3">Предстоит сделать</h1>
          {outstandingTasks.length ? (
            outstandingTasks.map((task) => (
              <TaskCard
                id={task.id}
                key={task.id}
                status={task.status}
                onDelete={() => onDelete(task.id)}
                onchangeCheck={() => onchangeCheck(task.id)}
                text={task.text}
              />
            ))
          ) : (
            <p className="text-center">Нет задач</p>
          )}
        </div>

        <div>
          <h1 className="text-center mb-3">Выполненные задачи</h1>
          {completedTasks.length ? (
            completedTasks.map((task) => (
              <TaskCard
                id={task.id}
                key={task.id}
                status={task.status}
                onDelete={() => onDelete(task.id)}
                onchangeCheck={() => onchangeCheck(task.id)}
                text={task.text}
              />
            ))
          ) : (
            <p className="text-center">Нет выполненных задач</p>
          )}
        </div>
      </main>
    );

  return (
    <>
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="">
          <Button
            onClick={formDisplay}
            variant="outline-success"
            className="me-3"
          >
            {formShow ? "Скрыть форму" : "Добавить новую задачу"}
          </Button>
          <Button variant="outline-success" onClick={onSave}>
            Сохранить прогресс
          </Button>
        </div>
        <TaskForm show={formShow} />
      </div>
      <hr />
      <>{content}</>
    </>
  );
};

export default Home;
