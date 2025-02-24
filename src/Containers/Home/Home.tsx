import TaskForm from '../../components/TasksForm/TasksForm.tsx';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './TasksThunks.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import Loader from '../../components/Loader/Loader.tsx';
import TaskCard from '../../components/TaskCard/TaskCard.tsx';

const Home = () => {
  const [formShow, setFormShow] = useState(false);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const error = useSelector((state: RootState) => state.tasks.error);
  const tasksArray = useSelector((state: RootState) => state.tasks.tasks);

  console.log(tasksArray);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);


  const formDisplay = () => {
    setFormShow(prev => (!prev));
  };

  let content: React.ReactNode | null = null;


  if (loading) content = <Loader />;
  if (!loading && !error) content = (
    tasksArray.map((task) => (
      <TaskCard key={task.id} text={task.taskText} />
    ))
  );
  if (error) content = <h1 className="text-center">Произошла ошибка!</h1>;

  return (
    <>
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div>
          <Button onClick={formDisplay} variant="outline-primary">
            {formShow ? 'Добавить новую задачу' : 'Скрыть форму'}
          </Button>
        </div>
        <TaskForm show={formShow}/>
      </div>

      <main>
        <div>
          <h1>Предстоит сделать</h1>
          {content}
        </div>
        <div>
          <h1>Выполненные задачи</h1>
        </div>
      </main>
    </>
  );
};

export default Home;