import React from 'react'
import { MapPin, CalendarClock } from 'lucide-react'

export default function SignUp(props) {
    return (
        <section className='sign-up'>
            <h2 className='name'>{props.name}</h2>
            <p className='description'>{props.description}</p>
            <h4 className='location'> <MapPin style={{verticalAlign: 'text-top'}}/> {props.location}</h4>
            <p className='times'> <CalendarClock style={{verticalAlign: 'bottom'}}/> {props.startTime} - {props.endTime}</p>
            <button>Sign Up</button>
        </section>
    )
}