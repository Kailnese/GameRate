import React, { Component } from 'react'
import {Games} from '../../dummyDB'
import { Card, List, Avatar, Typography, Icon } from 'antd'


const list = Games
const { Paragraph }  = Typography
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
)

export default class GameList extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={list}
                renderItem={item => (
                <List.Item>
                    <Card 
                        hoverable
                        title={item.title}
                        cover={<img alt={item.id} src={process.env.PUBLIC_URL+"/images/"+item.imageSrc} style={{width: 300, height: 350}}/>}
                        >
                            <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                {item.description}
                            </Paragraph>
                            <div style={{margin: 'auto'}}>
                                <IconText type="star-o" text={item.like} key="list-vertical-star-o" style={{position: 'relative', float: 'right'}}/>
                                <IconText type="like-o" text={item.like} key="list-vertical-like-o" style={{position: 'relative', float: 'right'}}/>
                            </div>
                    </Card>
                </List.Item>
                )}
            />
        )
    }
}
