import CalendarComponent from '../components/calendar'
import './stylesheets/upcoming-events.css'

export default function UpcomingEvents() {
    return (
        <div className='upcoming-events'>
            <h1>Upcoming Events</h1>
            <CalendarComponent />
        </div>
    )
}