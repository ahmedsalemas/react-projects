import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {

    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        fetch('https://meetup-c8ff8-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true });
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
