// React Imports
import React, { useState, useEffect } from 'react'

// Component Imports
import Slideshow from '../components/slideshow'
import CalendarComponent from '../components/calendar'
import './stylesheets/home.css'

// Firestore Imports
import { db } from '../firebase-config'
import { collection , getDocs } from 'firebase/firestore'

function Home() {
    const [photoArray, setPhotoArray] = useState([])

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const querySnapshot = await getDocs(collection(db, 'slideshow-photos'))
    //             const photos = querySnapshot.docs.map(doc => ({
    //                 url: doc.data().url, 
    //                 alt: doc.data().alt
    //             }))

    //             setPhotoArray(photos)
    //             console.log(photos)
    //         } catch (error) {
    //             console.error('Error getting documents: ', error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    useEffect(() => {
        const images = [
            { url: '/Users/VipulBansal/Library/CloudStorage/OneDrive-CobbCountySchoolDistrict/Coding/CSHS Website/src/resources/Seminar - Image 1.jpg', alt: 'Seminar Image 1.jpg'},
            { url: '/Users/VipulBansal/Library/CloudStorage/OneDrive-CobbCountySchoolDistrict/Coding/CSHS Website/src/resources/Seminar - Image 2.jpg', alt: 'Seminar Image 2.jpg'},
            { url: '/Users/VipulBansal/Library/CloudStorage/OneDrive-CobbCountySchoolDistrict/Coding/CSHS Website/src/resources/Seminar - Image 3.jpg', alt: 'Seminar Image 3.jpg'},
            { url: '/Users/VipulBansal/Library/CloudStorage/OneDrive-CobbCountySchoolDistrict/Coding/CSHS Website/src/resources/Speaker - Image 1.JPG', alt: 'Speaker Image 1.jpg'},
            { url: '/Users/VipulBansal/Library/CloudStorage/OneDrive-CobbCountySchoolDistrict/Coding/CSHS Website/src/resources/Speaker - Image 2.JPG', alt: 'Speaker Image 2.jpg'},
        ]

        setPhotoArray(images)
    }, [])

    return (
        <>
            <section className='photos-slideshow'>
                <h1>Recent Photos</h1>
                <Slideshow images={photoArray} />
            </section>
            <hr />
            <section className='calendar'>
                <h1>Upcoming Events</h1>
                <CalendarComponent />
            </section>
        </>
    )
}

export default Home