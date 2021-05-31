import React, { Component } from 'react'

import styles from './index.css'

export default class index extends Component {
    render() {
        return (
            <div className="main">
                <div className="canvas">
                    <button className="start">Start</button>
                </div>
                <div className="scorePanel">
                    <div className="display">
                        <h1>Score</h1>
                        <h1 className="score"><span className="num" style={{color: `#fff`, marginRight: `16px`}}>0</span> Points</h1>
                    </div>
                </div>
            </div>
        )
    }
}
