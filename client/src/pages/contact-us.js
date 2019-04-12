import React, { Component } from 'react';
import Layout from '../components/layout.js'
import axios from 'axios';

import '../styles/component/contactus__page.scss'

export default class Contactus extends Component {
    state = {
        email: '',
        subject: '',
        body: '',
        success: false,
        fail: false,
    }

    handleFormChande = (e) => {
        if(e.target.name === 'email') {
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === 'subject') {
            this.setState({
                subject: e.target.value
            })
        } else if (e.target.name === 'body') {
            this.setState({
                body: e.target.value
            })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, body } = this.state;
        
        // TODO: implement validation
        try {
            let res = await fetch('http://localhost:3000/contactus', {
                method: 'POST',
                body: {
                    email,
                    body
                },
                Headers: {
                    "Content-Type": "application/json"
                }
            })

            if(res.status === 200) {
                this.setState({
                    success: true,
                    fail: false,
                    email: '',
                    body: '',
                    subject: '',
                })
            } else {
                this.setState({
                    failed: true,
                    success: false,
                })
            }
        } catch(err) {
            this.setState({
                failed: true,
                success: false,
            })
        }
    }
    
    render() {
        let { email, subject, body, failed, success } = this.state;
        return (
            <Layout themeColor='white'>
                <div id="contact-us__wrapper" className="page-wrapper">
                    <div className="page-title">
                        <h1 className='title'>CONTACT US</h1>
                    </div>
                    {failed && <p className="contactus__failed">Failed to send message, please try again or call us at 972-670-1500</p>}
                    {success && <p className="contactus__success">Message was delivered successfully. We will get back to you very soon!</p>}
                    <div className="contactus__container fade-in">
                        <p className="text">Feel free to reach out for any questions you might have!</p>
                        <form action="#" className="contactus__form" onSubmit={this.handleSubmit}>
                            <input type="email" name="email" value={email} onChange={this.handleFormChande} placeholder=" Enter email . ." className="form-input email"/>
                            <input type="text" name="subject" value={subject} onChange={this.handleFormChande} placeholder=" Enter Subject . ." className="form-input subject"/>
                            <textarea type="text" name="body" value={body} onChange={this.handleFormChande} placeholder=" Message . ." className="form-input body"/>
                            <input type="submit" className="form-input submit" value="submit"/>
                        </form>
                    </div>
                </div>
    
            </Layout>
        )
    }
}