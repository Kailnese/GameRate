import React, { Component } from 'react'
import { Card, Col, Row, Icon, Button, Input } from 'antd'

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
)

const { TextArea } = Input

export default class GameDetails extends Component {

    constructor(props){
        super(props)
        const Games = this.props.data
        this.state = {
            item : Games.find(ite => ite.id == props.match.params.id),
            imageLink : process.env.PUBLIC_URL+"/images/"
        }
    }



    deleteComment = (comment) => {
        this.setState({
            item: this.state.item.comments.filter(ite => ite != comment)
        })
    }

    render() {
        const { item, imageLink } = this.state
        return (
            <div>
                <Row gutter={16}>
                    <Col span={10}>
                        <Card 
                            hoverable
                            title={item.title}
                            cover={<img alt={item.id} src={imageLink+item.imageSrc}/>}
                            >
                                {item.description}
                                <div style={{margin: 'auto'}}>
                                    <IconText type="star-o" text={item.like} key="list-vertical-star-o" style={{position: 'relative', float: 'right'}}/>
                                    <IconText type="like-o" text={item.like} key="list-vertical-like-o" style={{position: 'relative', float: 'right'}}/>
                                </div>
                        </Card>
                    </Col>
                    <Col span={14}>
                        <Card
                            hoverable
                            title={"comments("+item.comments.length+")"}
                        >
                            {item.comments.map(comment => {
                                return (
                                        <Card key={comment}
                                            actions={[
                                                <Button onClick={this.deleteComment.bind(this, comment)}>Delete Comment</Button>
                                            ]}
                                            >
                                                <p style={{fontWeight: "bold"}}>{comment}</p>
                                        </Card>
                                       )
                            })}
                            <br />
                            <TextArea rows={4} placeholder="Write Your Comment About The Game"/>
                            <br />
                            <Button style={{float: 'right'}}>Submit Comment</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
