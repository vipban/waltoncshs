import React from 'react'

export default function Calendar() {
    const calendarSrc = "https://calendar.google.com/calendar/embed?src=dcfcdb0b49805229221411d49688fa71211e21ae00f56ba13d58153b6e554d13%40group.calendar.google.com&ctz=America%2FNew_York"

    return (
        <iframe src={calendarSrc} style={{frameborder: '0', scrolling: 'no'}} className='cshs-calendar'></iframe>
    )
}