import React, { useState } from 'react';
import { Button, Dimmer, Header, Loader, Modal, Form, Input, Label, Checkbox, Dropdown } from 'semantic-ui-react';
import MapBox from './MapBox';
import TimeInput from 'react-input-time';
import styled from 'styled-components'

const FeedbackForm = ({ coords }) => {
    const [open, setOpen] = useState(false);
    
    const [streetName, setStreetName] = useState('');
    const [timeParked, setTimeParked] = useState('');
    // const [timeReturned, setTimeReturned] = useState('');
    const [ticketed, setTicketed] = useState(false);
    const toggle = () => setTicketed(!ticketed);


    const timeOptions = [
        {
            key: '15',
            text: '15 minutes',
            value: '15'
        },
        {
            key: '30',
            text: '30 minutes',
            value: '30'
        },
        {
            key: '60',
            text: '1 hour',
            value: '60'
        },
        {
            key: '120',
            text: '2+ hours',
            value: '120'
        },
    ]
    
    const POST_DATA_URL = '';

    const submitForm = () => {
        const formData = {
            streetName: streetName,
            timeParked: timeParked,
            // timeReturned: timeReturned,
            ticketed: ticketed,    
        };
        // fetch(API_URL, 
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     })
        // .then(resp => resp.json())
        // .catch(console.log)
        console.log(formData);
        setOpen(false);
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Submit Feedback</Button>}
        >
            <Modal.Header>Did you get a ticket?</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p>Enter your experience to improve the model. Your help is greatly appreciated!</p>
                </Modal.Description>

                <Form style={{padding: '1em'}}>
                    <MapBox coords={coords} />
                    {/* <Form.Field>
                        <Input placeholder='Enter Street Name' onChange={e => setStreetName(e.target.value)} value={streetName}></Input>
                    </Form.Field> */}
                    <Form.Field>
                        <Label>How long did you park for</Label>
                        <Dropdown 
                            placeholder='Length of time parked'
                            fluid
                            selection
                            options={timeOptions}
                            onChange={(e, { value }) => console.log(value)}
                        />
                        {/* <TimeInput
                            className="input-time"
                            initialTime={timeParked}
                            onChange={(event) => {setTimeParked(event.target.value)}}
                        /> */}
                    </Form.Field>
                    {/* <Form.Field>
                        <Label>Time Returned To Car</Label>
                        <TimeInput
                            className="input-time"
                            initialTime={timeReturned}
                            onChange={(event) => {setTimeReturned(event.target.value)}}
                        />
                    </Form.Field> */}
                    <Form.Field>
                        <Checkbox slider label='Were you issued a ticket?' onChange={toggle} checked={ticketed} />
                    </Form.Field>


                </Form>

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => submitForm()} positive>Submit</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default FeedbackForm;