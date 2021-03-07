import React, { useState } from 'react';
import { Button, Dimmer, Header, Loader } from 'semantic-ui-react';
import styled from 'styled-components'

import FeedbackForm from './FeedbackForm';
import PredictForm from './PredictForm';
import MapBox from './MapBox';
import title from '../assets/title.png';

const PageContainerStyle = styled.div`
    width: 66%;
    height: 80%;
    text-align: center;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    
`;

const MainPage = () => {
    const [submission, setSubmission] = useState(false);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [start, setStart] = useState(false);
    // const [feedbackPopup, setFeedbackPopup] = useState(false);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        });
    }

    const getCurrentTime = () => {
        var date = new Date();
        setCurrentTime(date.toLocaleString());
    }

    const reset = () => {
        setSubmission(false);
        setPrediction('');
    } 


    if (!currentLocation) {
        getCurrentLocation();        
    }


    const API_URL = '';
    const initializeProcessing = () => {
        getCurrentTime();

        setLoading(true);
        // do processing
        // fetch(API_URL, 
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             location: currentLocation,
        //             time: currentTime,
        //         })
        //     })
        // .then(resp => resp.json())
        // .then((data) => {
        //     setPrediction(data);
        // })
        // .catch(console.log)

        setTimeout(() => setLoading(false), 2000);
        // setLoading(false);
        setStart(true);
    }

    return (
        <PageContainerStyle>
            <Header as='h1'> 
            <Header.Content>
                <img src={title} alt='Calculated Ticket' style={{
                    height: '75px'
                }} />
            </Header.Content>
            </Header>

            {
                loading ?
                <Dimmer active>
                    <Loader size='huge' indeterminate> Processing </Loader>
                </Dimmer>
                :
                <></>
            }

            <div style={{ margin:"0 auto", padding:'2px', width:'65%', textAlign: 'center' }}>
                {start ? 
                <MapBox coords={[currentLocation.latitude, currentLocation.longitude]} />
                : <></>
                }
            </div>

            {/* {submission ?
                loading ?
                    <Dimmer active>
                        <Loader size='huge' indeterminate> Making a Prediciton </Loader>
                    </Dimmer>
                    :
                    <span>Probability of getting a ticket: {prediction}</span>
                :
                <PredictForm setPrediction={setPrediction} setLoading={setLoading} setSubmission={setSubmission} />
            } */}

            {/* <div style={{ padding: '2em 0' }}>
                <Button onClick={reset}>Reset</Button>
            </div> */}
            {
                start ? 
                <></>
                :
                <div style={{ textAlign: 'center' }}>
                    <Button onClick={initializeProcessing}> Start </Button>
                </div>

            }

            {currentLocation ?
            <FeedbackForm coords={[currentLocation.latitude, currentLocation.longitude]} />
            :
            <></>
            }
        </PageContainerStyle>
    )
}

export default MainPage;