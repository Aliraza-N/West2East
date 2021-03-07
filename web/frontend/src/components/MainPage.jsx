import React, { useState } from 'react';
import { Button, Dimmer, Header, Loader } from 'semantic-ui-react';
import styled from 'styled-components'

import FeedbackForm from './FeedbackForm';
import PredictForm from './PredictForm';
import MapBox from './MapBox';

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
        setCurrentTime(date.toLocaleDateString());
    }

    const reset = () => {
        setSubmission(false);
        setPrediction('');
    } 


    if (!currentLocation) {
        getCurrentLocation();        
    }

    const initializeProcessing = () => {
        getCurrentTime();

        setLoading(true);
        // do processing


        setTimeout(() => setLoading(false), 2000);
        // setLoading(false);
        setStart(true);
    }

    return (
        <PageContainerStyle>
            <Header as='h1'> 
            <Header.Content>
                Risky Ticket
                <Header.Subheader>Toronto</Header.Subheader>
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

            <div style={{ }}>
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