import React, { Component } from 'react'
import { Carousel, Card, Row, Col } from 'antd'
import { connect } from 'react-redux'

import style from './index.css'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortedLike: [...this.props.game_manage.sort((a, b) => (a.like < b.like) ? 1: -1)],
            sortedDislike: [...this.props.game_manage.sort((a, b) => (a.dislike < b.dislike) ? 1: -1)],
            imageLink: process.env.PUBLIC_URL+"/images/"
        };
    }
    sortGameByLike = (games) => {
        return 
    }
    sortGameByDislike = (games) => {
        return [...games.sort((a, b) => (a.dislike < b.dislike) ? 1: -1)]
    }

    forward = (id) => {
        this.props.history.push({
            pathname: `/admin/gamelist/${id}`
        })
    }
    
    render() {
        return (
            <div style={{width: '50%', margin: `0 auto`}}>
                <Carousel 
                    afterChange={this.onChange}
                    autoplay='true'
                    effect='fade'
                    >
                    {this.state.sortedLike.slice(0, 3).map(item => {
                        return <img src={this.state.imageLink + item.imageSrc} key={item.id} onClick={() => this.forward(item.id)}/>
                    })}
                </Carousel>
                <Row gutter={16} style={{marginTop: `66px`}}>
                    <Col span={15}>
                        <Card style={{float: `left`, borderRadius: `16px`}} title="Most Liked Game">
                            {this.state.sortedLike.map(item => {
                                return (
                                    <h3>{this.state.sortedLike.indexOf(item)+1}<span style={{marginLeft: `12px`, cursor: `pointer`}} onClick={() => this.forward(item.id)}>{item.title}</span>:<span style={{float: `right`}}>{item.like}</span></h3>
                                )
                            })}
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{float: `left`, borderRadius: `16px`}} title="Most Disliked Game">
                            {this.state.sortedDislike.map(item => {
                                return (
                                    <h3>{this.state.sortedDislike.indexOf(item)+1}<span style={{marginLeft: `12px`, cursor: `pointer`}} onClick={() => this.forward(item.id)}>{item.title}</span>:<span style={{float: `right`}}>{item.dislike}</span></h3>
                                )
                            })}
                        </Card>
                    </Col>
                </Row>
                
                
            </div>
            
        )
    }
}

const mapToState = (state) => {
    return state
}

export default connect(mapToState)(Dashboard)