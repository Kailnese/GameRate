import React, { Component } from 'react'
import { Card, Col, Row, Icon, Button, Input } from 'antd'
import { connect } from 'react-redux'

import { like, dislike, addComment, removeComment } from '../../../actions/game_manage'

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
)

const { TextArea } = Input

class GameDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            item : this.props.game_manage.find(item => item.id === Number(props.match.params.id)),
            imageLink : process.env.PUBLIC_URL+"/images/",
            comment: ""
        }
    }

    submitComment = (id) => {
        this.props.addComment(id, this.state.comment);
        this.setState({
            comment: ""
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
                            cover={<img alt="missing" src={imageLink+item.imageSrc}/>}
                            >
                                {item.description}
                                <div style={{margin: 'auto'}}>
                                    <div style={{float: `left`}} onClick={this.props.like.bind(this, item.id)}>
                                        <IconText type="like" text={item.like} key="list-vertical-star-o"/>
                                    </div>
                                    <div style={{float: `left`, marginLeft: `15px`}} onClick={this.props.dislike.bind(this, item.id)}>
                                        <IconText type="dislike" text={item.dislike} key="list-vertical-like-o"/>
                                    </div>
                                    
                                    
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
                                                <Button onClick={this.props.removeComment.bind(this, item.id, comment)}>Delete Comment</Button>
                                            ]}
                                            >
                                                <p style={{fontWeight: "bold"}}>{comment}</p>
                                        </Card>
                                       )
                            })}
                            <br />
                            <TextArea rows={4} placeholder="Write Your Comment About The Game" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}/>
                            <br />
                            {/* submit comment */}
                            <Button 
                                style={{float: 'right'}} 
                                onClick={() => this.submitComment(item.id)}>
                                    Submit Comment
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapToState = (state) => {
    return state;
}

export default connect(mapToState, {like, dislike, addComment, removeComment})(GameDetails)