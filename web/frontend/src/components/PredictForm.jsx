import React, { useState } from 'react';
import { Button, Checkbox, Dimmer, Form, Header, Input, Loader, Label } from 'semantic-ui-react';
import TimeInput from 'react-input-time';
import styled from 'styled-components'

const PredictForm = ({ setPrediction, setLoading, setSubmission }) => {
    const [street, setStreet] = useState('');
    const [time, setTime] = useState('12:00');

    const API_URL = ''

    const submitForm = () => {
        setSubmission(true);
        setLoading(true);
        // fetch(API_URL, 
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             street: street,
        //             time: time,
        //         })
        //     })
        // .then(resp => resp.json())
        // .then((data) => {
        //     setPrediction(data);
        // })
        // .catch(console.log)
        setPrediction('0.85')
        setTimeout(() => setLoading(false), 2000);
    }

    return (
        <Form onSubmit={() => submitForm()}>
            <Form.Field>
                {/* <Label>Street</Label> */}
                <Input placeholder='Enter Street Name' onChange={e => setStreet(e.target.value)} value={street} />
            </Form.Field>
            <Form.Field>
                <Label>Current Time</Label>
                <TimeInput
                    className="input-time"
                    initialTime={time}
                    onChange={(event) => {setTime(event.target.value)}}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default PredictForm;