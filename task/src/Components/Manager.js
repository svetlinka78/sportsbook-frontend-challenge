
import React, { useState } from 'react';
import Error from './Error';
import TaskCreate from './TaskCreate';
import TaskRead from './TaskRead';
import TaskUpdate from './TaskUpdate';
import TaskDelete from './TaskDelete';
import TaskList from './TaskList';

import useApi from '../hooks/useApi';

const rootApi = process.env.REACT_APP_API_URL;
const isMock = false; //rootApi.indexOf("mock") > -1;
const extMock = isMock ? ".json" : "";

//function Manager() {
const Manager = () => {
    
    const initialUrl = rootApi + extMock;
    const initialData = useState({ UserId: '', Date:'', StartDate: '', EndDate: '', Subject: '', Description: '' });

    const [search, setSearch] = useState({ filter: "" });
    const [currentData, setCurrentData] = useState(initialData);
    const [creating, setCreating] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [reading, setReading] = useState(false);
  

  //const { oidcUser } = useOidcUser();
  //const httpHeaders = { Authorization: oidcUser ? `Bearer ${oidcUser.access_token}` : "NoAuth" };
  const httpHeaders =  {Authorization:"NoAuth"};
  // API
  const [{ isLoading, error, task }, makeRequest] = useApi({
    url: initialUrl,
    method: "get",
    headers: httpHeaders,
    data: {}
  });

  const createTask = data => {
    setCreating(!creating);
    makeRequest({
      url: initialUrl,
      method: isMock ? "get" : "post",
      headers: httpHeaders,
      data: data
    });
  }

  const updateTask = (id, updatedData) => {
    setUpdating(!updating);
    makeRequest({
      //url: isMock ? initialUrl : `${initialUrl}/${id}`,///this is ${initialUrl}
      url: initialUrl,
      method: isMock ? "get" : "put",
      headers: httpHeaders,
      data: updatedData
    });
  }

  const deleteTask = id => {
    setDeleting(!deleting);
    makeRequest({
      url: isMock ? initialUrl : `${initialUrl}/${id}`,
      method: isMock ? "get" : "delete",
      headers: httpHeaders,
      data: {}
    }); 
  }

  const handleReset = () => {
    setSearch({ filter: "" });
    makeRequest({
      url: initialUrl,
      method: "get",
      headers: httpHeaders,
      data: {}
    });
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.filter.length) {
      makeRequest({
        url: `${initialUrl}?search=${search.filter}`,
        method: "get",
        headers: httpHeaders,
        data: {}
      });
      return;
    }

    handleReset();
  }

  const handleChangeFilter = event => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  }

  const handleCreate = () => {
    setCreating(true);
    setCurrentData(initialData);
  }

  const handleRead = data => {
    setReading(true);
    setCurrentData(data);
  }

  const handleUpdate = data => {
    setUpdating(true);
    setCurrentData(data);
  }

  const handleDelete = data => {
    setDeleting(true);
    setCurrentData(data);
  }

  const closeModal = () => {
    setCreating(false);
    setReading(false);
    setUpdating(false);
    setDeleting(false);
    setCurrentData(initialData);
  }

  // Error
  if (error) {
    return <Error msg={error} />;
  }

  // Loading
  if (isLoading) {
    return <progress></progress>;
  }

  if (!task) {
    return null;
  }
  

  if (creating) { return <TaskCreate isOpen={creating} onSubmit={createTask} currentData={currentData} closeModal={closeModal} /> }
  if (reading)  { return <TaskRead   isOpen={reading} onSubmit={closeModal} currentData={currentData} closeModal={closeModal} /> }
  if (updating) { return <TaskUpdate isOpen={updating} onSubmit={updateTask} currentData={currentData} closeModal={closeModal} /> }
  if (deleting) { return <TaskDelete isOpen={deleting} onSubmit={deleteTask} currentData={currentData} closeModal={closeModal} /> }

  return (
    <div>
      Manager Form
       <div className="w60 center">
        <form onSubmit={handleSearch} className="autogrid has-gutter-l">
          <input
            autoFocus
            type="text"
            maxLength="20"
            name="filter"
            placeholder="Filter"
            value={search.filter}
            onChange={handleChangeFilter}
          />
          <button className="btn--primary">Search</button>
          <button className="btn--info" onClick={handleReset}>Reset</button>
          <button className="btn--success" onClick={handleCreate}>Create</button>
        </form>
         <TaskList
          task={task}
          handleRead={handleRead}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete} /> 
      </div> 
    </div>
  );
}

export default Manager;