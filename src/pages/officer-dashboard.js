import React, { useState } from 'react'
import './stylesheets/officer-dashboard.css'

export default function OfficerDashboard() {
    const [password, setPassword] = useState('')
    const officerPassword = 'waltoncshsofficers'

    const [displaySignUps, setDisplaySignUps] = useState(false)
    const [displayLinks, setDisplayLinks] = useState(false)
    const [displayWebsiteInfo, setDisplayWebsiteInfo] = useState(false)

    function toggleDisplaySignUps() {
        setDisplaySignUps(!displaySignUps)
        setDisplayLinks(false)
        setDisplayWebsiteInfo(false)
    }
    
    function toggleDisplayLinks() {
        setDisplayLinks(!displayLinks)
        setDisplaySignUps(false)
        setDisplayWebsiteInfo(false)
    }

    function toggleDisplayWebsiteInfo() {
        setDisplayWebsiteInfo(!displayWebsiteInfo)
        setDisplaySignUps(false)
        setDisplayLinks(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const inputtedPassword = event.target.elements.password.value
        setPassword(inputtedPassword)
    }
    
    if (password === officerPassword) {     // Correct Input
        return (
            <section className="officer-dashboard">
                <h1>Officer Dashboard</h1>
                <div className='officer-buttons'>
                    <button onClick={toggleDisplaySignUps}>Sign-Up Details</button>
                    <button onClick={toggleDisplayLinks}>Important Links</button>
                    <button onClick={toggleDisplayWebsiteInfo}>Important Website Information</button>
                </div>

                {displaySignUps ?
                    <section className='officer-sign-ups'>

                    </section>
                :
                    <></>
                }

                {displayLinks ?
                    <section className='officer-links'>
                        <a href='https://drive.google.com' target='_blank'>Walton CSHS Google Drive</a>     {/* CHANGE TO ACTUAL GOOGLE DRIVE */}
                        <a href='https://calendar.google.com' target='_blank'>Walton CSHS Google Calendar</a>       {/* CHANGE TO ACTUAL GOOGLE CALENDAR */}
                    </section>
                :
                    <></>
                }

                {displayWebsiteInfo ?
                    <section className='website-info'>
                        <div className='website-info-block'>
                            <h3>Google Drive</h3>
                            <a href='https://drive.google.com' target='_blank'>Walton CSHS Google Drive</a>     {/* CHANGE TO ACTUAL GOOGLE DRIVE */}
                            <p>
                                The only part of the Walton CSHS Google Drive that is attached to the website
                                is the photos for the slideshow on the homepage.

                                Any photos added to the slideshow folder will be automatically added to the website
                                but deleted photos will not be removed (requires Zapier premium), so you must use
                                Firebase/Firestore to remove unwanted images from the slideshow.
                            </p>
                        </div>

                        <div className='website-info-block'>
                            <h3>Google Calendar Rules</h3>
                            <a href='https://calendar.google.com' target='_blank'>Walton CSHS Google Calendar</a>       {/* CHANGE TO ACTUAL GOOGLE CALENDAR */}
                            <p>
                                The Google Calendar is integrated with Zapier and has one <b>very</b> important part
                                that must be included for the website to function correctly.
                                
                                At the <b>end</b> of the description of each Google Calendar event that <b>requires sign-ups</b>,
                                you must include 'Slots: ##' and replace ## with the number of slots you would like the sign-up to have.

                                Other than that, feel free to schedule the Google Calendar as you see fit and everything should update correctly on the website!
                            </p>
                        </div>

                        <div className='website-info-block'>
                            <h3>Zapier (Automation)</h3>
                            <a href='https://zapier.com' target='_blank'>Zapier</a>     {/* CHANGE TO ACTUAL ZAPIER FOLDER */}
                            <p>Zapier is used to link the Google Calendar and Google Drive to the website.</p>
                        </div>

                        <div className='website-info-block'>
                            <h3>Firebase/Firestore (Database)</h3>
                            <a href='https://console.firebase.google.com/project/walton-cshs-1/firestore/' target='_blank'>Firestore Console</a>
                            <p>
                                Firestore is the backbone of this website. It stores all of the member sign-ups, the slideshow photos, stores deleted events as a safeguard, and more.
                                Most of the time, you will not need to interact with Firestore as it is mostly self-sufficient, but there are two times when you will have to.
                                One, as mentioned previously, is deleting unwanted photos from the picture slideshow on the homepage.
                                The second, and likely the most used, will be removing a member's sign up from an event.
                            </p>
                            <div className='firestore-instructions'>
                                <div>
                                    <b>To remove a slideshow picture:</b>
                                    <ol>
                                        <li>Click on the above link to open the Firestore console</li>
                                        <li>Click on the collection called 'slideshow-pictures'.</li>
                                        <li>Hover over the document with the name of the picture you want to delete.</li>
                                        <li>Click on the 3 vertical dots on the left of the document's name.</li>
                                        <li>Click 'delete document'.</li>
                                        <li>Click 'Start delete'.</li>
                                    </ol>
                                </div>

                                <div>
                                    <b>To remove an event sign-up:</b>
                                    <ol>
                                        <li>Click on the above link to open the Firestore console</li>
                                        <li>Click on the collection called 'events'.</li>
                                        <li>Click on the event the member signed up for.</li>
                                        <li>Under the title 'registeredPeople' find the index that has the member's name.</li>
                                        <li>Hover over this index.</li>
                                        <li>Click the trash can icon on the right.</li>
                                        <li>Click 'Delete'.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                :
                    <></>
                }
            </section>
        )
    } else if (password === '') {   // No Input
        return (
            <form onSubmit={handleSubmit} className='officer-password-form'>
                <label htmlFor='password'>Enter the Walton CSHS Officer Password:</label>
                <input type="password" id='password' name='password' className='officer-input'/>
                <input type='submit' value='Submit' className='officer-submit'/>
            </form>
        )
    } else {    // Wrong Input
        return (
            <>
                <form onSubmit={handleSubmit} className='officer-password-form'>
                    <label htmlFor='password'>Enter the Walton CSHS Officer Password:</label>
                    <input type="password" id='password' name='password' className='officer-input'/>
                    <input type='submit' value='Submit' className='officer-submit'/>
                </form>
                <h1>Incorrect Password</h1>
            </>
        )
    }
}