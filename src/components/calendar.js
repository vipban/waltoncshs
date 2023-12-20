import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import { MapPin, CalendarClock, Clock, X } from 'lucide-react'
import './stylesheets/calendar.css'

export default function CalendarComponent() {
    const [modalState, setModalState] = useState({ isOpen: false, event: null })
    const [prevId, setPrevId] = useState('')

    // Event pop-up on event click
    function EventModal({ isOpen, onClose, event }) {
        const modalClassName = isOpen ? 'event-modal show' : 'event-modal'
        let top = modalState.top
        let left = modalState.left

        if (isOpen) {
            // Date/Time Formatting
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

            let startTime = start.toLocaleTimeString('en-US', timeOptions)
            let endTime = end.toLocaleTimeString('en-US', timeOptions)

            // Description Formatting
            let formattedDescription = event.description.slice(0, event.description.indexOf('Slots:'))
        
            console.log(top, left)

            return (
                <div className={modalClassName} style={{ top: `${top}px`, left: `${left}px` }}>
                    <h3 className='flex'>{event.title} <X onClick={onClose} style={{cursor: 'pointer'}}/></h3>
                    <p className='flex'>{ formattedDescription || 'No description'}</p>
                    {event.allDay ? <p className='flex'><CalendarClock /> {startDate} - {endDate}</p> : <p><Clock /> {startDate} ({startTime} - {endTime})</p>}
                    <p className='flex'><MapPin /> {event.extendedProps.location}</p>
                </div>
            )
        }
    }

    function handleEventClick(info) {
        info.jsEvent.preventDefault()
    }

    function handleEventHover(info) {
        const { id } = info.event

        if (id !== prevId) {
            info.jsEvent.preventDefault()

            const eventElement = info.el
            const rect = eventElement.getBoundingClientRect()
            let top = rect.bottom + window.scrollY
            let left = rect.left + window.scrollX

            window.location.pathname.endsWith('/upcoming-events') ? top -= 175 : top -= 1385

            setModalState({
                isOpen: true,
                event: { ...info.event.toPlainObject(), description: info.event.extendedProps.description },
                top: top,
                left: left
            })

           setPrevId(id)
        }
    }
  
    function closeModal() {
      setModalState({ isOpen: false, event: null })
    }

    return (
        <>
            <div className='dayGrid'>
                <EventModal isOpen={modalState.isOpen} onClose={closeModal} event={modalState.event} />
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    initialView='dayGridMonth'
                    googleCalendarApiKey='AIzaSyD_a8nxB1B6ns3qCU5X5RRp-A2u-Gf34qQ'
                    events={{ googleCalendarId: 'dcfcdb0b49805229221411d49688fa71211e21ae00f56ba13d58153b6e554d13@group.calendar.google.com' }}
                    eventClick={handleEventClick}
                    eventMouseEnter={handleEventHover}
                    eventMouseLeave={handleEventHover}
                    aspectRatio='2.5'
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
        </>
    )
}