import React, { Component } from 'react'
import { Card, List, Typography, Icon } from 'antd'


const { Paragraph }  = Typography
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
)

export default class GameList extends Component {
    list = this.props.data

    cardClicked = (item) => {
        this.props.history.push({
            pathname: '/admin/gamelist/'+item.id
        })
    }

    imageLink = process.env.PUBLIC_URL+"/images/"

    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.list}
                renderItem={item => (
                <List.Item>
                    <div onClick={this.cardClicked.bind(this, item)}>
                        <Card 
                            hoverable
                            title={item.title}
                            cover={<img alt={item.id} src={this.imageLink+item.imageSrc} style={{width: 300, height: 350}}/>}
                            >
                                <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                                    {item.description}
                                </Paragraph>
                                <div style={{margin: 'auto'}}>
                                    <IconText type="star-o" text={item.like} key="list-vertical-star-o" style={{position: 'relative', float: 'right'}}/>
                                    <IconText type="like-o" text={item.like} key="list-vertical-like-o" style={{position: 'relative', float: 'right'}}/>
                                </div>
                        </Card>
                    </div>
                </List.Item>
                )}
            />
        )
    }
}
