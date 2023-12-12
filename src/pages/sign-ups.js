import React, { useEffect, useState } from 'react'
import SignUp from '../components/sign-up'
import './stylesheets/sign-ups.css'

// Firestore Imports
import { app, db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'

export default function SignUps() {
    const [eventArray, setEventArray] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'))
                const events = querySnapshot.docs.map(doc => ({
                    name: doc.data().name,
                    description: doc.data().description,
                    location: doc.data().location,
                    startTime: doc.data().startTime,
                    endTime: doc.data().endTime,
                    registeredPeople: doc.data().registeredPeople
                }))
                setEventArray(events)
                console.log(events)
            } catch (error) {
                console.error('Error getting documents: ', error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
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
        </>
    )
}