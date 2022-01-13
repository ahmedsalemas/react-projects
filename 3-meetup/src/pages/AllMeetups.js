import React, { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://meetup-c8ff8-default-rtdb.firebaseio.com/meetups.json'
        ).then(res => {
            return res.json();
        }).then(data => {
            const meetupss = [];
            for (const Key in data) {
                const meetup = {
                    id: Key,
                    ...data[Key]
                };
                meetupss.push(meetup);
            }
            setIsLoading(false);
            setMeetups(meetupss);
        });
    }, []);





    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default AllMeetupsPage
