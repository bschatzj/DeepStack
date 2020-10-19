import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./CalendarFormat.css";
import "./Calendar.css"
import { useComponentVisible } from '../Utils/OutsideClickHook'
import axios from 'axios'
import Form from './AddEvent'

const localizer = momentLocalizer(moment);

function CalendarDisplayed() {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);
    const [events, setEvents] = useState([])
    const [open, setOpen] = useState({})

    useEffect(() => {
        axios.get("https://deep-stack.herokuapp.com/api/calendar")
            .then(res => {
                console.log(res)
                setEvents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const cleanedEvents = events.map(eventInfo => {
        return ({
            start: new Date(eventInfo.Date),
            end: (moment(eventInfo.Date).add({ ["hours"]: 4 })._d),
            title: eventInfo.Title,
            description: eventInfo.Description,
        }
        )
    })

    console.log(moment("Fri Feb 14 2020 14:00:00 GMT-0500 (Eastern Standard Time)").add({ ["hours"]: 4 }))
    return (
        <div className="CalendarPage">

            <Form />
            <div>
                <h1 className="EventTitle">Events</h1>
                <h1>Day:</h1>
                <h1>Time:</h1>
                <p>Description:</p>
            </div>

            <div className="CalendarHolder">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={cleanedEvents}
                    style={{ width: "100%", height: "100%" }}
                    views={["month", "week"]}
                    onSelectEvent={event => {
                        setOpen(event)
                        setIsComponentVisible(true)
                    }}
                />
            </div>
            {isComponentVisible ?
                <div className="modal">
                    <div ref={ref} className="infoArea">
                        <h1 className="X" onClick={() => { setOpen({}); setIsComponentVisible(false) }}>X</h1>
                        <h1>{open.title}</h1>
                        <h1>{open.description}</h1>
                        <h1>{open.start.toTimeString()}</h1>
                        <h1>{open.start.toDateString()}</h1>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default CalendarDisplayed;