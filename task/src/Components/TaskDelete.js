import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';

const TaskDelete = props => {
  const initialData = props.currentData;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // Submit
  const deleteTask = event => {
    event.preventDefault();
    props.onSubmit(data.id);
  };

  return (
    <div className="w60 center">
      <MainForm
        isOpen={props.isOpen}
        title="Deleting a task"
        data={data}
        handleChange={null}
        closeModal={props.closeModal}
        disabled="disabled"
        onSubmit={deleteTask} />
    </div>
  );
}

export default TaskDelete;