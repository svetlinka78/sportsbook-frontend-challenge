import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';

const TaskRead = props => {
  const initialData = props.currentData;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <div className="w60 center">
      <MainForm
        isOpen={props.isOpen}
        title="Reading a task"
        data={data}
        handleChange={null}
        closeModal={props.closeModal}
        disabled="disabled"
        onSubmit={props.onSubmit} />
    </div>
  );
}

export default TaskRead;