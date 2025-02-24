import Layout from '../../components/Layout/Layout.tsx';
import TaskForm from '../../components/TasksForm/TasksForm.tsx';
import { Button } from 'react-bootstrap';
import {  useState } from 'react';


const Home = () => {
  const [formShow, setFormShow] = useState(false);



  const formDisplay = () => {
    setFormShow(prev => (!prev));
  };

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <Button onClick={formDisplay} variant="outline-primary">
              {formShow ? "Добавить новую задачу" :  "Скрыть форму"}
            </Button>
          </div>
          <TaskForm show={formShow} />
        </div>
      </Layout>
    </>
  );
};

export default Home;