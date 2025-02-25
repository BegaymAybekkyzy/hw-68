import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { TaskForm } from "../../types";
import { fetchTasks, taskSubmit } from "../../Containers/Home/TasksThunks.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store.ts";

interface Props {
  show?: boolean;
}

const TasksForm: React.FC<Props> = ({ show = false }) => {
  const [form, setForm] = useState<TaskForm>({
    text: "",
    status: false,
  });

  const dispatch: AppDispatch = useDispatch();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(taskSubmit(form));
    await dispatch(fetchTasks());
    setForm({
      text: "",
      status: false,
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let formDisplay: React.ReactNode | null;

  if (!show) formDisplay = null;
  if (show)
    formDisplay = (
      <Form onSubmit={onSubmitForm}>
        <div className="row align-items-center">
          <div className="col-9">
            <FloatingLabel label="Введите новую задачу">
              <Form.Control
                name="text"
                required
                value={form.text}
                onChange={onChangeInput}
                type="text"
                placeholder="Введите новую задачу"
              />
            </FloatingLabel>
          </div>
          <div className="col-3">
            <Button type="submit" variant="outline-success">
              Сохранить
            </Button>
          </div>
        </div>
      </Form>
    );

  return formDisplay;
};

export default TasksForm;
