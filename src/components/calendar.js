import React from 'react'
import './stylesheets/calendar.css'

export default function CalendarComponent() {
    // Styled Calendar
    return (
        <>
            <iframe src="https://embed.styledcalendar.com/#wg3VOmHPXUHSTNlnUvLk" data-cy="calendar-embed-iframe" className='cshs-calendar'></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
        </>
    )
}