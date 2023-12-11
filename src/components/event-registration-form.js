import React from 'react'

// Firestore Imports
import { app, db } from '../firebase-config'
import { arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'

export default function RegistrationForm(props) {
    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const firstName = formData.get('fname')
        const lastName = formData.get('lname')
        const email = formData.get('email')
        const phone = formData.get('phone')

        const docRef = doc(db, 'events', props.name)
        let person = {firstName: firstName, lastName: lastName, email: email, phone: phone}

        try {
            await updateDoc(docRef, {
                registeredPeople: arrayUnion(person)
            })
            event.target.reset()
        } catch (error) {
            console.error('Error adding document: ', error)
        }
    }

    return (
        <form className='registration-form' id={`${props.name}-registration-form`} onSubmit={handleSubmit}>
                <label for='fname'>First Name</label>
                <input id='fname' type='text' name='fname' required/>
                <label for='lname'>Last Name</label>
                <input id='lname' type='text' name='lname' required/>
                <label for='email'>Email</label>
                <input id='email' type='email' name='email' required/>
                <label for='phone'>Phone Number</label>
                <input id='phone' type='tel' name='phone'/>
                <input type='submit' value='submit' />
        </form>
    )
}