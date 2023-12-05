import car1 from '../resources/blue-maserati.jpg'
import car2 from '../resources/McLaren-720S.jpg'
import car3 from '../resources/Audi-R8.jpg'

import { Slideshow } from '../components/slideshow'
import './stylesheets/home.css'

function Home() {
    const images = [car1, car2, car3]

    return (
        <>
            <section className='materials-slideshow'>
                <h1>Recyclable Materials</h1>
                <Slideshow imageUrls={images} />
            </section>
        </>
    )
}

export default Home