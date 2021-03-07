import React, { useState } from 'react';
import { Button, Dimmer, Header, Loader, Modal, Form, Input, Label, Checkbox } from 'semantic-ui-react';
import TimeInput from 'react-input-time';
import styled from 'styled-components'

const FeedbackForm = () => {
    const [open, setOpen] = useState(false);
    
    const [streetName, setStreetName] = useState('');
    const [timeParked, setTimeParked] = useState('');
    const [timeReturned, setTimeReturned] = useState('');
    const [ticketed, setTicketed] = useState(false);
    const toggle = () => setTicketed(!ticketed);
    
    const POST_DATA_URL = '';

    const submitForm = () => {
        const formData = {
            streetName: streetName,
            timeParked: timeParked,
            timeReturned: timeReturned,
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
                    <p>Enter your experience improve the model. Your help is greatly appreciated!</p>
                </Modal.Description>

                <Form style={{padding: '1em'}}>
                    <Form.Field>
                        <Input placeholder='Enter Street Name' onChange={e => setStreetName(e.target.value)} value={streetName}></Input>
                    </Form.Field>
                    <Form.Field>
                        <Label>Time Parked</Label>
                        <TimeInput
                            className="input-time"
                            initialTime={timeParked}
                            onChange={(event) => {setTimeParked(event.target.value)}}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Label>Time Returned To Car</Label>
                        <TimeInput
                            className="input-time"
                            initialTime={timeReturned}
                            onChange={(event) => {setTimeReturned(event.target.value)}}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox slider label='Ticketed?' onChange={toggle} checked={ticketed} />
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