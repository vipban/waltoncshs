import car1 from '../resources/blue-maserati.jpg'
import car2 from '../resources/McLaren-720S.jpg'
import car3 from '../resources/Audi-R8.jpg'

import { Slideshow } from '../components/slideshow'
import Calendar from '../components/calendar'
import './stylesheets/home.css'

function Home() {
    const images = [car1, car2, car3]

    return (
        <>
            <section className='materials-slideshow'>
                <h1>Recent Photos</h1>
                <Slideshow imageUrls={images} />
            </section>

            <section className='calendar'>
                <h1>Upcoming Events</h1>
                <Calendar />
            </section>
        </>
    )
}

export default Home