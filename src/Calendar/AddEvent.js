import React, { useState } from 'react'
import axios from 'axios'
import Dater from 'date.js'
import moment, { now } from 'moment'


export default function AddEvent() {
    const [eventInfo, setEventInfo] = useState({
        Title: "",
        Date: "",
        Description: "",
        Repeat: false,
    })
    const [time, setTime] = useState("")
    const [value, setValue] = useState("Week")
    const [number, setNumber] = useState(1)

    const handleChange = e => {
        console.log(eventInfo)
        setEventInfo({ ...eventInfo, [e.target.name]: e.target.value })
    }

    const handleChecked = e => {
        setEventInfo({ ...eventInfo, Repeat: e.target.checked })
    }

    function repeat(startDate, number, values) {
        for (let i = 0; i < number; i++) {
            console.log(i)
            const date = moment(new Date(startDate + "T" + time))
            const newDate = (date.add({ [values]: i }));
            console.log(newDate)
            axios.post('https://deep-stack.herokuapp.com/api/calendar/newevent', { "Date": newDate, "Title": eventInfo.Title, "Description": eventInfo.Description })
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        }
    }

    function submit() {
        const date = moment(new Date(eventInfo.Date + "T" + time))._d
        console.log(date)
        const infoPosted = { "Date": date, "Title": eventInfo.Title, "Description": eventInfo.Description }
        console.log(infoPosted)
        if (eventInfo.Repeat) {
            repeat(eventInfo.Date, number, value)
        }
        else {
            axios.post('https://deep-stack.herokuapp.com/api/calendar/newevent', infoPosted)
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        }
    }
    console.log(value)
    console.log(number)
    return (
        <div>
            <form>
                <label>Title</label>
                <input name="Title" value={eventInfo.Title} onChange={handleChange} />
                <label>Date</label>
                <input name="Date" type="Date" value={eventInfo.Date} onChange={handleChange} />
                <label>Time</label>
                <input name="Time" placeholder={"12:57"} type="Time" value={time} onChange={(e) => { setTime(e.target.value) }} />
                <label>Description</label>
                <textarea resize="none" name="Description" value={eventInfo.Description} onChange={handleChange} />
                <label>Repeat Event</label>
                <input name="Repeat" value={eventInfo.Repeat} onChange={handleChecked} type="checkbox" />
                {eventInfo.Repeat ?
                    <>
                        <select value={value} onChange={e => { setValue(e.target.value) }}>
                            <option>Day</option>
                            <option>Week</option>
                            <option>Month</option>
                        </select>
                        <label>Number of Repeats</label>
                        <input onChange={e => { setNumber(e.target.value) }} value={number} type="number" max={100} min={1} />
                    </>
                    : null
                }


            </form>

            <button onClick={() => { submit() }} >repeat</button>
        </div>
    )
}