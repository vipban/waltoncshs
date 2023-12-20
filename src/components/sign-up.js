import React, { useState, useEffect } from 'react'
import RegistrationForm from './event-registration-form'
import { MapPin, CalendarClock, Users } from 'lucide-react'

// Firestore Imports
import { db } from '../firebase-config'
import { doc , getDoc } from 'firebase/firestore'

export default function SignUp(props) {
    const [isFormVisible, setIsFormVisible] = useState(false)

    function handleClick() {
       setIsFormVisible(!isFormVisible)
    }

    const [registeredPeople, setRegisteredPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'events', props.name)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    const originalPeople = docSnap.data().registeredPeople
                    let formattedPeople = ''
                    if (props.officer) {       // officers
                        formattedPeople = originalPeople.map(person => {
                            let phone = person.phone
                            phone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, phone.length)}`

                            return person.firstName + ' ' + person.lastName + ', ' + person.email + ', ' + phone
                        })
                    } else if (originalPeople !== undefined) {        // non-officers
                        formattedPeople = originalPeople.map(person => {
                            return person.firstName + ' ' + person.lastName
                        })
                    }
                    setRegisteredPeople(formattedPeople)
                } else {
                    console.log('No such document!')
                }
            } catch (error) {
                console.error('Error getting documents: ', error)
            }
        }

        fetchData()
    }, [props.name]) // useEffect runs when props.name changes

    return (
        <section className='event'>
            <div className='event-grid'>
                <div className='event-details'>
                    {props.event.name ? <h2 className='name'>{props.event.name}</h2> : <h2>Unnamed Event</h2>}
                    {props.description ? <p className='description'>{props.description}</p> : <div></div>}
                    {props.location ? <h4 className='location'> <MapPin style={{verticalAlign: 'text-top'}}/> {props.location}</h4> : <div></div>}
                    {props.startTime && props.endTime ? <p className='times'> <CalendarClock style={{verticalAlign: 'bottom'}}/> {props.startTime} - {props.endTime}</p> : <div></div>}
                    <p><Users style={{verticalAlign: 'bottom'}}/> Slots Left: {props.slots - registeredPeople.length}</p>
                </div>

                {registeredPeople.length > 0 ? (
                    <div className='registered-people'>
                        <h2>People Registered</h2>
                        <div className='registered-people-list'>
                            {registeredPeople.map((person, index) => (
                                <p key={index}>{person}</p>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='registered-people'>
                        <h2>People Registered</h2>
                        <div className='registered-people-list'>
                            <p>No people registered :(</p>
                        </div>
                    </div>
                )}
            </div>
            {props.slots > registeredPeople.length && !props.officer && <button onClick={handleClick}>{isFormVisible ? 'Hide Sign Up Form' : 'Show Sign Up Form'}</button>}
            {isFormVisible && <RegistrationForm name={props.name}/>}
        </section>
    )
}