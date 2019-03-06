import React, { Component } from 'react';

export default class AnimatedText extends Component {
    state = {
        words: ['MOMENTS', 'LOVE', 'DETAILS'],
        currentIndex: 0,
        span: [],
        show: 'show',
    }

    // componentDidMount() {
    //     let self = this;
    //     const { words, currentIndex } = self.state;
    //         let span = []
    //         span.push(<span className="animated-text__animation show"> {words[currentIndex]}</span>);
    //         let newCurrentIndex = currentIndex + 1;
    //         this.setState({
    //             currentIndex: newCurrentIndex,
    //             span,
    //         })
    // }
    
    getAnimatedSpan = () => {
        const {currentIndex, span} = this.state;
        return(<span className="animated-text__animation">{}</span>)
    }
    render() {
        return  (
            <div className="animated-text__wrapper">
                <div className="animated-text__text">
                    <p className="animated-text__text__const">WE CAPTURE</p>
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

