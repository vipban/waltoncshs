import React, { useState, useEffect, useRef } from 'react'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import './stylesheets/slideshow.css'

export default function Slideshow({ images }) {
    const [imageIndex, setImageIndex] = useState(0)
    const imageIndexRef = useRef(imageIndex)
    const [startX, setStartX] = useState(0)
    const [endX, setEndX] = useState(0)
    const [disableAutoplay, setDisableAutoplay] = useState(false)
    
    const swipeThreshold = 50
    const autoplayTimeout = 5000

    function showNextImage() {
        if (!disableAutoplay)
            setImageIndex(index => (index === images.length - 1 ? 0 : index + 1))
    }

    function showPrevImage() {
        if (!disableAutoplay)
            setImageIndex(index => (index === 0 ? images.length - 1 : index - 1))
    }

    function handleLeftButtonClick() {
        setDisableAutoplay(true)

        setTimeout(() => {
            setDisableAutoplay(false)
        }, autoplayTimeout)

        showPrevImage()
    }

    function handleRightButtonClick() {
        setDisableAutoplay(true)

        setTimeout(() => {
            setDisableAutoplay(false)
        }, autoplayTimeout)

        showNextImage()
    }

    function handleTouchStart(e) {
        setStartX(e.touches[0].clientX)
    }

    function handleTouchMove(e) {
        setEndX(e.touches[0].clientX)
    }

    function handleTouchEnd() {
        const deltaX = startX - endX

        if (deltaX > swipeThreshold){
            handleRightButtonClick()
        } else if (deltaX < -swipeThreshold) {
            handleLeftButtonClick()
        }
    }

    useEffect(() => {
        imageIndexRef.current = imageIndex
        
        const intervalID = setInterval(() => {
            showNextImage()
        }, 5000)

        return () => clearInterval(intervalID)
    }, [disableAutoplay])

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
                        src={url}
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