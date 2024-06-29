import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MainForm = props => {
    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndTime] = useState(new Date());
    //const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch('https://api/User')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error(error));
    // }, []);
  

    const handleKeyDown = event => {
      if (event.keyCode === 13) {
        // ENTER
        if (event.target.id !== "Id") {
          event.preventDefault();  
          props.onSubmit(event);
        }
  
        return;
      }
  
      // ESCAPE
      if (event.keyCode === 27) {
        props.closeModal();
      }
    }
    return (
        <form onSubmit={props.onSubmit} onKeyDown={handleKeyDown} className="alert">
            <header className="clearfix">
                <button className="fr btn--danger" onClick={props.closeModal}> X </button>
                <div className="u-bold">
                <div className={props.title.indexOf("Deleting") > -1 ? "alert--danger" : "alert--primary"}>{props.title}</div>
                <div className="alert--danger">{props.msgErr}</div>
                </div>
            </header>
    
            {/* <div>
            {data ? (
                <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            </div> */}
           <div>       
                <label className="u-bold">UserId:</label>
            </div>
            <input className="w100" autoFocus type="text" maxLength="100" name="userId" id="userId" placeholder="userId" value={props.data.userId} onChange={props.handleChange} disabled={props.disabled} />
        
            <div>       
                <label className="u-bold">Date:</label>
            </div>
            <input className="w100" autoFocus type="text" maxLength="100" name="date" id="date" placeholder="Date" value={props.data.date} onChange={props.handleChange} disabled={props.disabled} />
            <div>       
                <label className="u-bold">StartTime:</label>
            </div>
            <input className="w100" autoFocus type="text" maxLength="100" name="startTime" id="startTime" placeholder="StartTime" value={props.data.startTime} onChange={props.handleChange} disabled={props.disabled} />
            <div>       
                <label className="u-bold">EndTime:</label>
            </div>
            <input className="w100" autoFocus type="text" maxLength="100" name="endTime" id="endTime" placeholder="EndTime" value={props.data.endTime} onChange={props.handleChange} disabled={props.disabled} />

          {/* 
            <div>
                <label className="u-bold">StartTime:</label>
            </div>
            <DatePicker
                selected={startTime}
                //onChange={handleDateChange}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                dateFormat="Pp"
            />
            <div>
                <label className="u-bold">EndTime:</label>
            </div>
            <DatePicker
                selected={endTime}
                //onChange={handleDateChange}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                dateFormat="Pp"
            /> */}
            <div>
                <label className="u-bold">Subject:</label>
            </div>
            <input className="w100" autoFocus type="text" maxLength="100" name="subject" id="subject" placeholder="Subject" value={props.data.subject} onChange={props.handleChange} disabled={props.disabled} />

            <div>
                <label className="u-bold txtright">Description:</label>
            </div>
            <textarea className="w100" rows="5" maxLength="399" name="description" id="description" placeholder="Description" value={props.data.description} onChange={props.handleChange} disabled={props.disabled} />
        
            <footer className="clearfix">
                <button className="fl btn--danger" onClick={props.closeModal}>Cancel</button>
                <button className="fr btn--success">Confirm</button>
            </footer>
        </form>
      );
    }
    
    export default MainForm;