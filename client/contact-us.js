import React, { Component } from 'react';
import Layout from './src/components/layout.js'

import '../styles/component/contactus__page.scss'

export default class Contactus extends Component {
    state = {
        email: '',
        password: '',
        body: '',
        mounted: true,
    }

    handleFormChange = (e) => {
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

    handleSubmit = () => {
        // TODO: implement serverside handling
    }
    
    render() {
        let { email, subject, body } = this.state;
        return (
            <Layout themeColor='white'>
                <div id="contact-us__wrapper" className="page-wrapper">
                    <div className="page-title">
                        <h1 className='title'>CONTACT US</h1>
                    </div>
                    <div className={`contactus__container ${mounted ? 'fade-in' : ''}`}>
                        <p className="text">Feel free to reach out for any questions you might have!</p>
                        <form action="mailto:tarek.demachkie@gmail.com" method="post" className="contactus__form" onSubmit={this.handleSubmit}>
                            <input type="email" name="email" value={email} onChange={this.handleFormChange} placeholder=" Enter email . ." className="form-input email"/>
                            <input type="text" name="subject" value={subject} onChange={this.handleFormChange} placeholder=" Enter Subject . ." className="form-input subject"/>
                            <textarea type="text" name="body" value={body} onChange={this.handleFormChange} placeholder=" Message . ." className="form-input body"/>
                            <input type="submit" className="form-input submit" value="submit"/>
                        </form>
                    </div>
                </div>
    
            </Layout>
        )
    }
}