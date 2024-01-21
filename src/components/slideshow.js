import React, { useState, useEffect, useRef } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './stylesheets/slideshow.css'

// Photos
import photo1 from '../resources/Seminar - Image 1.jpg'
import photo2 from '../resources/Seminar - Image 2.jpg'
import photo3 from '../resources/Seminar - Image 3.jpg'
import photo4 from '../resources/Speaker - Image 1.JPG'
import photo5 from '../resources/Speaker - Image 2.JPG'

export default function Slideshow() {
    const [imageIndex, setImageIndex] = useState(0)
    const [startX, setStartX] = useState(0)
    const [endX, setEndX] = useState(0)
    const [disableAutoplay, setDisableAutoplay] = useState(false)
    const intervalRef = useRef(null)
    
    const swipeThreshold = 50
    const autoplayTimeout = 5000

    const images = [
        { url: {photo1}, alt: 'Seminar Image 1'},
        { url: {photo2}, alt: 'Seminar Image 2'},
        { url: {photo3}, alt: 'Seminar Image 3'},
        { url: {photo4}, alt: 'Speaker Image 1'},
        { url: {photo5}, alt: 'Speaker Image 2'},
    ]

    function showNextImage() {
        setImageIndex(index => (index === images.length - 1 ? 0 : index + 1))
    }

    function showPrevImage() {
        setImageIndex(index => (index === 0 ? images.length - 1 : index - 1))
    }

    function handleLeftButtonClick() {
        setDisableAutoplay(true)
        showPrevImage()
        setTimeout(() => {
            setDisableAutoplay(false)
        }, 0)
    }

    function handleRightButtonClick() {
        setDisableAutoplay(true)
        showNextImage()
        setTimeout(() => {
            setDisableAutoplay(false)
        }, 0)
    }

    function handleTouchStart(e) {
        setDisableAutoplay(true)
        setStartX(e.touches[0].clientX)
    }

    function handleTouchMove(e) {
        setEndX(e.touches[0].clientX)
    }

    function handleTouchEnd() {
        const deltaX = startX - endX

        if (deltaX > swipeThreshold){
            showNextImage()
        } else if (deltaX < -swipeThreshold) {
            showPrevImage()
        }

        setTimeout(() => {
            setDisableAutoplay(false)
        }, 0)    }

    useEffect(() => {
        if (!disableAutoplay) {            
            intervalRef.current = setInterval(() => {
                showNextImage()
            }, 5000)
        } else {
            clearInterval(intervalRef.current)
        }

        return () => clearInterval(intervalRef.current)
    }, [disableAutoplay, imageIndex, images.length])
    

    return (
        <section
            aria-label='Image Slideshow'
            style={{ width: '100%', height: '100%', position: 'relative' }}
        >
            <a href='after-image-slideshow-controls' className='skip-link'>Skip Image Slideshow Controls</a>
            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    overflow: 'hidden'
                }}
            >
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={require(url)}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        className='img-slider-img'
                        style={{translate: `${-100 * imageIndex}%`}}
                    />
                ))}
            </div>
            <button onClick={handleLeftButtonClick} className='img-slider-btn left-btn' style={{left: 0}} aria-label='View Previous Image'>
                <ArrowBigLeft aria-hidden />
            </button>
            <button onClick={handleRightButtonClick} className='img-slider-btn right-btn' id='right-btn' style={{right: 0}} aria-label='View Next Image'>
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