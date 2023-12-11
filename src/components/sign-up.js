import React, {useState} from 'react'
import RegistrationForm from './event-registration-form'
import { MapPin, CalendarClock } from 'lucide-react'

export default function SignUp(props) {
    const [isFormVisible, setIsFormVisible] = useState(false)

    function handleClick() {
       setIsFormVisible(!isFormVisible)
    }

    return (
        <section className='sign-up'>
            <h2 className='name'>{props.name}</h2>
            <p className='description'>{props.description}</p>
            <h4 className='location'> <MapPin style={{verticalAlign: 'text-top'}}/> {props.location}</h4>
            <p className='times'> <CalendarClock style={{verticalAlign: 'bottom'}}/> {props.startTime} - {props.endTime}</p>
            <button onClick={handleClick}>{isFormVisible ? 'Hide Sign Up Form' : 'Show Sign Up Form'}</button>
            {isFormVisible && <RegistrationForm name={props.name}/>}
        </section>
    )
}