import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  text: string;
}

const TaskCard: React.FC<Props> = ({text}) => {
  return (
    <Card className="mb-3">
      <Card.Body>{text}</Card.Body>
    </Card>
  );
};

export default TaskCard;