import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { TaskForm } from '../../types';
import { fetchTasks, taskSaving } from '../../Containers/Home/TasksThunks.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store.ts';

interface Props {
  show?: boolean;
}

const TasksForm: React.FC<Props> = ({show}) => {
  const [form, setForm] = useState<TaskForm>({
    taskText: "",
    taskStatus: false,
  });

  const dispatch: AppDispatch = useDispatch();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(taskSaving(form));
    dispatch(fetchTasks());
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  let formDisplay: React.ReactNode | null;

  if (show) formDisplay = null;
  if (!show) formDisplay = (
    <Form onSubmit={onSubmitForm}>
      <FloatingLabel className="d-inline-block me-3" label="Введите новую задачу">
        <Form.Control
          name="taskText"
          onChange={onChangeInput}
          type="text"
          placeholder="Введите новую задачу"/>
      </FloatingLabel>
      <Button type="submit" variant="outline-primary">Сохранить</Button>
    </Form>);

  return (formDisplay);
};

export default TasksForm;