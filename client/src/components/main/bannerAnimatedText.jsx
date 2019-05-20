import React, { Component } from 'react';

export default class AnimatedText extends Component {
    state = {
        words: ['LOVE', 'MOMENTS', 'DETAILS'],
        currentIndex: 0,
        span: [],
        show: 'show',
    }
    getAnimatedSpan = () => {
        return(<span className="animated-text__animation">{}</span>)
    }
    render() {
        return  (
            <div className="animated-text__wrapper">
                <div className="animated-text__text">
                    <p className="animated-text__text__const">Where We Capture</p>
                    <div className="animated-text__animation-wrapper">
                    <div className="animated-text__animation-container">{
                        this.state.words.map((word) => {
                            return (
                                <p className="animated-text__animation">{word}</p>
                            )
                        })

                    }</div>
                    </div>        
                </div>
            </div>
        )
    }
    }

