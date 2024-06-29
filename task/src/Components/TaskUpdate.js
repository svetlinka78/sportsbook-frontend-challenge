import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';

const TaskUpdate = props => {
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


  const updateTask = event => {
    event.preventDefault();
    if (!/\S/.test(data.label)) {
      setMsgErr("The label cannot be empty.");
      return;
    }

    if (JSON.stringify(initialData) === JSON.stringify(data)) {
      setMsgErr("No significant changes...");
      return;
    }

    props.onSubmit(data.id, data);
  };

  return (
    <div className="w60 center">
      <MainForm
        isOpen={props.isOpen}
        title="Updating a task"
        msgErr={msgErr}
        data={data}
        handleChange={handleChange}
        closeModal={props.closeModal}
        disabled= ""
        onSubmit={updateTask} />
    </div>
  );
}

export default TaskUpdate;