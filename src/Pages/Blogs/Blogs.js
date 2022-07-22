import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='accord-container m-3'>
            <div className='p-5'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item className='accord-item mx-auto' eventKey="0">
                        <Accordion.Header>1. Difference between authorization and authentication?</Accordion.Header>
                        <Accordion.Body>
                            For the safety of an automated data system, both Authentication and Authorization are used in relation to knowledge security. The internet's infrastructure relies heavily on each of these topics, and they're all extremely important. But the two names mean completely different things and are therefore used interchangeably. Despite the fact that they're often used in the same situation with the same tool, they're completely different. Users' identities are verified as part of the authentication procedure before being granted access to the system. The authority of a person or user to access resources is verified during the authorisation process. In the authorization process, authentication comes first, but in the authentication process, authentication comes second.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accord-item mx-auto' eventKey="1">
                        <Accordion.Header>2.
                            Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            For dynamic projects, Firebase is a viable alternative to building full-fledged backend code.Use this tool if you plan on storing and managing your app in the cloud in the future. Firebase is serverless, so you don't have to be concerned with the details of setting up a cloud server. Firebase is the reason behind this.
                            <br />
                            <br />
                            Other options instead of firebase are listed below:
                            <br />
                            -Parse
                            <br />
                            -Back4app
                            <br />
                            -Backendless
                            <br />
                            -Kuzzle
                            <br />
                            -Pubnub
                            <br />
                            -Kumulos
                            <br />
                            -Nhost
                            <br />
                            -AWS Amplify
                            <br />
                            -Heroku
                            <br />
                            -Deployd
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accord-item mx-auto' eventKey="2">
                        <Accordion.Header>3. What other services does firebase provide other than authentication?</Accordion.Header>
                        <Accordion.Body>
                            There are many services which Firebase provides, Most useful of them are:
                            <br />
                            -Cloud Firestore
                            <br />
                            -Cloud Functions
                            <br />
                            -Authentication
                            <br />
                            -Hosting
                            <br />
                            -Cloud Storage
                            <br />
                            -Google Analytics
                            <br />
                            -Predictions
                            <br />
                            -Cloud Messaging
                            <br />
                            -Dynamic Links
                            <br />
                            -Remote Config
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;
