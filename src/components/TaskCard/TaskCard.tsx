import React from "react";
import { Button, Card, Form } from "react-bootstrap";

interface Props {
  text: string;
  id: string;
  status: boolean;
  onchangeCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<Props> = ({
  text,
  id,
  status,
  onchangeCheck,
  onDelete,
}) => {
  return (
    <Card className="mb-3 ">
      <Card.Body className="d-flex justify-content-sm-between">
        <div className="d-flex align-items-center">{text}</div>
        <div>
          <Form.Check // prettier-ignore
            type="checkbox"
            className="mb-3"
            checked={status}
            onChange={() => onchangeCheck(id)}
            label={status ? "Выполнено" : "Выполнить"}
          />
          <Button variant="outline-success" onClick={() => onDelete(id)}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
