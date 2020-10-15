import React, { useState } from 'react'
import axios from 'axios'
import Dater from 'date.js'

export default function AddEvent() {
    const [eventInfo, setEventInfo] = useState({
        Title: "",
        Date: "",
        Description: "",
    })

    const handleChange = e => {
        console.log(eventInfo)
        setEventInfo({ [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form>
                <label>Title</label>
                <input name="Title" value={eventInfo.Title} onChange={handleChange} />
                <label>Date</label>
                <input name="Date" type="Date" value={eventInfo.Date} onChange={handleChange} />
                <label>Description</label>
                <input name="Description" value={eventInfo.Description} onChange={handleChange} />
            </form>
        </div>
    )
}