import React, { Component } from 'react'
import { Card, List, Typography, Icon } from 'antd'
import { connect } from 'react-redux'

import { like, dislike } from '../../actions/game_manage'
import styles from './index.css'


const { Paragraph }  = Typography
const IconText = ({ type, text, theme }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} theme={theme} />
        {text}
    </span>
)

class GameList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: this.props.game_manage,
            imageLink: process.env.PUBLIC_URL+"/images/" 
        }
    }

    cardClicked = (item) => {
        this.props.history.push({
            pathname: `/admin/gamelist/${item.id}`
        })
    }

    render() {
        return (
            <>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.state.list}
                    renderItem={item => (
                    <List.Item>
                        <div>
                            <Card 
                                hoverable
                                title={item.title}
                                cover={<img alt="missing" src={this.state.imageLink+item.imageSrc} 
                                style={{width: `100%`, height: 350, overflow: `auto`}} 
                                
                                onClick={() => this.cardClicked(item)}/>}
                                >
                                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                        {item.description}
                                    </Paragraph>
                                    <div onClick={this.props.like.bind(this, item.id)} style={{float: 'left'}}>
                                        <IconText type="like" text={item.like} key="list-vertical-star-o" style={{marginRight: '40px', cursor: `pointer`}}
                                                    theme={item.likeClicked ? "filled" : ""}/>
                                    </div>
                                    <div onClick={this.props.dislike.bind(this, item.id)} style={{float: 'left', marginLeft: '15px'}}>
                                        <IconText type="dislike" text={item.dislike} key="list-vertical-like-o" style={{marginRight: '40px', cursor: `pointer`}}
                                                    theme={item.dislikeClicked ? "filled" : ""}/>
                                    </div>
                                    <div style={{float: `right`}}>
                                        <p>{item.comments.length} Comments</p>
                                    </div>
                                    
                            </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </>
        )
    }
}

const mapToState = (state) => {
    return state;
}

export default connect(mapToState, {like, dislike})(GameList)