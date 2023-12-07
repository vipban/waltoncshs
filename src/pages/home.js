import car1 from '../resources/blue-maserati.jpg'
import car2 from '../resources/McLaren-720S.jpg'
import car3 from '../resources/Audi-R8.jpg'

import Slideshow from '../components/slideshow'
import CalendarComponent from '../components/calendar'
import './stylesheets/home.css'

function Home() {
    // REPLACE WITH ACTUAL IMAGES
    const images = [
        { url: car1, alt: 'Car One' },
        { url: car2, alt: 'Car Two' },
        { url: car3, alt: 'Car Three'}
    ]

    return (
        <>
            <section className='photos-slideshow'>
                <h1>Recent Photos</h1>
                <Slideshow images={images} />
            </section>
            <hr />
            <section className='calendar'>
                <h1>Upcoming Events</h1>
                <CalendarComponent />
            </section>
            <hr />
            <section className='sign-ups'>
                <h1>Sign Ups</h1>
            </section>
        </>
    )
}

export default Home