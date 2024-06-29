import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';

const TaskCreate = props => {
  const initialData = props.currentData;
  const [data, setData] = useState(initialData);
  const [msgErr, setMsgErr] = useState("");

  useEffect(() => {
    setData(initialData);
    setMsgErr("");
  }, [initialData]);

  const handleChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setMsgErr("");
  }

  // Submit
  const createTask = event => {
    event.preventDefault();
    if (!/\S/.test(data.label)) {
      setMsgErr("The label cannot be empty.");
      return;
    }

    props.onSubmit(data);
  };

  return (
    <div className="w60 center">
      <MainForm
        isOpen={props.isOpen}
        title="Creating a new task"
        msgErr={msgErr}
        data={data}
        handleChange={handleChange}
        closeModal={props.closeModal}
        disabled = ""
        onSubmit={createTask} />
    </div>
  );
}

export default TaskCreate;