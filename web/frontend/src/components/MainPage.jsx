import React, { useState } from 'react';
import { Button, Dimmer, Header, Loader } from 'semantic-ui-react';
import styled from 'styled-components'
import FeedbackForm from './FeedbackForm';
import PredictForm from './PredictForm';

const PageContainerStyle = styled.div`
    width: 75%;
    margin: 4em;
`;

const MainPage = () => {
    const [submission, setSubmission] = useState(false);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);
    // const [feedbackPopup, setFeedbackPopup] = useState(false);

    const reset = () => {
        setSubmission(false);
        setPrediction('');
    } 


    return (
        <PageContainerStyle>
            <Header as='h1'> 
            <Header.Content>
                Risky Ticket
                <Header.Subheader>Vancouver</Header.Subheader>
            </Header.Content>
            </Header>

            {submission ?
                loading ?
                    <Dimmer active>
                        <Loader size='huge' indeterminate> Making a Prediciton </Loader>
                    </Dimmer>
                    :
                    <span>Probability of getting a ticket: {prediction}</span>
                :
                <PredictForm setPrediction={setPrediction} setLoading={setLoading} setSubmission={setSubmission} />
            }

            <div style={{ padding: '2em 0' }}>
                <Button onClick={reset}>Reset</Button>
            </div>
            <FeedbackForm />
        
        </PageContainerStyle>
    )
}

export default MainPage;