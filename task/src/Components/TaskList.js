import React from 'react';

const TaskList = props => {
  return (
    <table className="table table--zebra" summary="List of stuff">
      <caption>List of Tasks</caption>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">UserId</th>
          <th scope="col">Date</th>
          <th scope="col">StartTime</th>
          <th scope="col">EndTime</th>
          <th scope="col">Subject</th>
          <th scope="col">Description</th>
          <th colSpan="3"></th>
        </tr>
      </thead>
      <tbody>
        {props.task.map(data => {
          return (
            <tr key={data.id}> 
              <td data-label="userId">{data.userId}</td>
              <td data-label="date">{data.date}</td>
              <td data-label="startTime">{data.startTime}</td>
              <td data-label="endTime">{data.endTime}</td>
              <td data-laber="subject">{data.subject}</td>
              <td data-laber="description">{data.description}</td>
             <td><button className="btn--success" value={data.id} onClick={() => props.handleRead(data)}>Read</button></td>
              {/*data.user.id === props.currentUserId
                */}
                <>
                  <td><button className="btn--warning" value={data.id} onClick={() => props.handleUpdate(data)}>Update</button></td>
                  <td><button className="btn--danger" onClick={() => props.handleDelete(data)}>Delete</button></td>
                </>
                :
          {/*<td colSpan="2">Owned by: <code>{data.user.name} {data.user.name}</code></td>*/}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default TaskList;