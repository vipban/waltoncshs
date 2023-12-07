import React from 'react'
import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './stylesheets/slideshow.css'

export default function Slideshow({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

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
            <button onClick={showPrevImage} className='img-slider-btn' style={{left: 0}} aria-label='View Previous Image'>
                <ArrowBigLeft aria-hidden />
            </button>
            <button onClick={showNextImage} className='img-slider-btn' style={{right: 0}} aria-label='View Next Image'>
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