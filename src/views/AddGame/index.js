import React, { Component } from 'react'
import {Form, Input, Button, Upload, notification} from 'antd';
import { FileImageTwoTone } from '@ant-design/icons'
import { connect } from 'react-redux'

import { addNewGame } from '../../actions/game_manage'

 class AddNewGame extends Component {
    constructor(props){
        super(props);
    }
    
    formItemLayout = {
        labelCol: {
            xs: { span: 12 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 12 },
            sm: { span: 5 },
        },
    };
    openNotification = (title) => {
        notification.open({
            message: `${title} added`,
            description: `${title} successfully added! now direct to the game detail page`
        });
    };

    handleSubmit = () => {
        
        this.props.form.validateFields((err, fieldsValue) => {
            const newGame = {
                title: fieldsValue.title,
                imageSrc: ``,
                like: 0,
                dislike: 0,
                likeClicked: false,
                dislikeClicked: false,
                comments: [],
                description: fieldsValue.description
            };
            // first and second argument are not using, just setup some random value
            this.props.addNewGame(0, "", newGame);
            this.openNotification(fieldsValue.title);
            this.props.history.push({
                pathname: `/admin/gamelist/${this.props.game_manage[this.props.game_manage.length - 1].id + 1}`
            })
        })
    }
    normFile = e => {
        console.log('Upload event:', e);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form {...this.formItemLayout} onSubmit={this.handleSubmit}>
                <h1 style={{textAlign: 'center'}}>Create New Game</h1>
                <Form.Item label="Game Name">
                    {getFieldDecorator('title', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input new game title',
                        },
                        ],
                    })(<Input />)}  
                </Form.Item>
                <Form.Item label="Game Description">
                    {getFieldDecorator('description')(<Input />)}
                </Form.Item>
                <Form.Item label="Game Image">
                    {getFieldDecorator('dragger', {
                        valuePropName: 'imageList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger name="image">
                        <p className="ant-upload-drag-icon">
                            <FileImageTwoTone />
                        </p>
                        <p className="ant-upload-text">Click or drag image to this area to upload</p>
                        <p className="ant-upload-hint">Support for png or jpg upload.</p>
                        </Upload.Dragger>,
                    )}
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        xs: { span: 4, offset: 0 },
                        sm: { span: 4, offset: 12 },
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapToProps = (state) => {
    return state;
}

export default connect(mapToProps, {addNewGame})(Form.create({ name: 'time_related_controls' })(AddNewGame));