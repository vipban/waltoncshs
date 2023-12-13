import React from 'react'
import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './stylesheets/slideshow.css'

export default function Slideshow({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => (index === images.length - 1 ? 0 : index + 1))
    }

    function showPrevImage() {
        setImageIndex(index => (index === 0 ? images.length - 1 : index - 1))
    }

    // let intervalID = setInterval(showNextImage, 5000)
    // window.onload = setInterval(showNextImage, 5000)
    // window.onbeforeunload = clearInterval(intervalID)

    return (
        <section
            aria-label='Image Slideshow'
            style={{ width: '100%', height: '100%', position: 'relative' }}
        >
            <a href='after-image-slideshow-controls' className='skip-link'>Skip Image Slideshow Controls</a>
            <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        className='img-slider-img'
                        style={{translate: `${-100 * imageIndex}%`}}
                    />
                ))}
            </div>
            <button onClick={showPrevImage} className='img-slider-btn left-btn' style={{left: 0}} aria-label='View Previous Image'>
                <ArrowBigLeft aria-hidden />
            </button>
            <button onClick={showNextImage} className='img-slider-btn right-btn' style={{right: 0}} aria-label='View Next Image'>
                <ArrowBigRight aria-hidden />
            </button>
            <div style={{
                position: 'absolute',
                bottom: '0.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '.25rem'
            }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className='img-slider-dot-btn'
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                    </button>
                ))}
            </div>
            <div id='after-image-slideshow-controls'></div>
        </section>
    )
}