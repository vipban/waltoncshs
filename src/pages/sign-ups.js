import React, { useEffect, useState } from 'react'
import SignUp from '../components/sign-up'
import './stylesheets/sign-ups.css'

// Firestore Imports
import { app, db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'
import { Underline } from 'lucide-react'

export default function SignUps() {
    const [eventArray, setEventArray] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const today = new Date()
                const currentMonth = today.toLocaleString('defalt', { month: 'short' })
                let currentYear = today.getFullYear()
                const currentDateString = currentMonth + ' ' + today.getDate() + ', ' + currentYear

                const querySnapshot = await getDocs(collection(db, 'events'))
                const events = querySnapshot.docs.map(doc => {
                    let endTime = doc.data().endTime
                    let endDate = new Date(endTime.slice(0, endTime.indexOf(currentYear) + 4))
                    let currentDate = new Date(currentDateString)

                    console.log(endDate + ' vs ' + currentDate)

                    if (endDate > currentDate) {
                        return ({
                            name: doc.data().name,
                            description: doc.data().description,
                            location: doc.data().location,
                            startTime: doc.data().startTime,
                            endTime: doc.data().endTime,
                            registeredPeople: doc.data().registeredPeople
                        })
                    }
                })
                setEventArray(events.filter(event => event !== undefined))
                console.log(events)
                console.log(events.filter(event => event !== undefined))
            } catch (error) {
                console.error('Error getting documents: ', error)
            }
        }

        fetchData()
    }, [])

    if (eventArray.length > 0) {
        return (
            <section className='events'>
                <h1>Sign Ups</h1>
                {eventArray.map((event, index) => {
                    const slotsIndex = event.description.indexOf('Slots:')
                    const length = event.description.length

                    const actualDescription = event.description.slice(0, slotsIndex)
                    const slots = event.description.slice(slotsIndex + 7, length)
                    console.log(slots)
                    
                    return (
                        <SignUp
                            key={index}
                            name={event.name}
                            description={actualDescription}
                            location={event.location}
                            startTime={event.startTime}
                            endTime={event.endTime}
                            slots={slots}
                        />
                    )
                })}
            </section>
        )
    } else if (eventArray.length === 0) {
        return (
            <section className='events'>
                <h1>Sign Ups</h1>
                <h3 className='no-events'>No upcoming events</h3>
            </section>
        )
    }
}