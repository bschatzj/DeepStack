import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./CalendarFormat.css";
import "./Calendar.css"
const localizer = momentLocalizer(moment);

function CalendarDisplayed() {
    const state = {
        events: [
            {
                start: moment().toDate(),
                starttime: "12pm",
                endTime: "3pm",
                end: moment()
                    .toDate(),
                title: "Some title",
            }
        ]
    };

    const [open, setOpen] = useState({})


    console.log(moment().day())
    return (
        <div className="App">
            <div className="CalendarHolder">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={state.events}
                    style={{ width: "100%", height: "100%" }}
                    views={["month", "week"]}
                    onSelectEvent={event => {
                        setOpen(event)
                    }}
                />
            </div>
            {open.title ? <div className="modal"> <div className="infoArea"> <h1 className="X" onClick={() => { setOpen({}) }}>X</h1> <h1>{open.title}</h1> </div></div> : null}
        </div>
    );
}

export default CalendarDisplayed;