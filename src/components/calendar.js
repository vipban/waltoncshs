import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import { MapPin, CalendarClock, Clock, X } from 'lucide-react'
import './stylesheets/calendar.css'

export default function CalendarComponent() {
    function EventModal({ isOpen, onClose, event }) {
        if (isOpen) {
            let start = new Date(event.start)
            let end = new Date(event.end)
            const dateOptions = {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
            const timeOptions = {
                hour: 'numeric',
                minute: 'numeric'

            }

            let startDate = start.toLocaleDateString('en-US', dateOptions)
            let endDate = end.toLocaleDateString('en-US', dateOptions)

            let startTime = start.toLocaleTimeString('en-US', timeOptions);
            let endTime = end.toLocaleTimeString('en-US', timeOptions);

            let formattedDescription = event.description.slice(0, event.description.indexOf('Slots:'))
        
            return (
                <div className="event-modal">
                    <div className='event-modal-top'>
                        <h3>{event.title}</h3>
                        <X onClick={onClose} style={{cursor: 'pointer'}}/>
                    </div>
                    <p>{ formattedDescription || 'No description'}</p>
                    {event.allDay ? <p><CalendarClock /> {startDate} - {endDate}</p> : <p><Clock /> {startDate} ({startTime} - {endTime})</p>}
                    <p><MapPin /> {event.location}</p>
                </div>
            );
        }
    }

    const [modalState, setModalState] = useState({ isOpen: false, event: null })

    function handleEventClick(info) {
      info.jsEvent.preventDefault();
      setModalState({ isOpen: true, event: { ...info.event.toPlainObject(), description: info.event.extendedProps.description } })
    }
  
    function closeModal() {
      setModalState({ isOpen: false, event: null })
    }

    return (
        <>
            <div className='dayGrid'>
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    initialView='dayGridMonth'
                    googleCalendarApiKey='AIzaSyD_a8nxB1B6ns3qCU5X5RRp-A2u-Gf34qQ'
                    events={{ googleCalendarId: 'dcfcdb0b49805229221411d49688fa71211e21ae00f56ba13d58153b6e554d13@group.calendar.google.com' }}
                    eventClick={handleEventClick}
                />    
            </div>
            <div className='listView'>
                <FullCalendar
                    plugins={[listPlugin, googleCalendarPlugin]}
                    initialView='listMonth'
                    googleCalendarApiKey='AIzaSyD_a8nxB1B6ns3qCU5X5RRp-A2u-Gf34qQ'
                    events={{ googleCalendarId: 'dcfcdb0b49805229221411d49688fa71211e21ae00f56ba13d58153b6e554d13@group.calendar.google.com' }}
                />
            </div>
            <EventModal isOpen={modalState.isOpen} onClose={closeModal} event={modalState.event} />
        </>
    )
}