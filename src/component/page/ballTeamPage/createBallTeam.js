import React, { Component } from 'react';
import { View, Text, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Flex, List, InputItem, ImagePicker, Button } from 'antd-mobile'
class createBallTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memberToken: this.props.state.token,
            name: '',
            logo: 'logo.png',
            description: ''
        }
    }

    render() {
        const _this = this;
        const register = (data) => {
            if (!checkDataIsNull(data)) {
                // ToastAndroid('还有数据没有填写!', ToastAndroid.SHORT)
            } else {
                fetchData('team/info/register', 'post', {
                    data,
                    fun_Success(resData) {
                        if (resData.retCode === retTure) {
                            _this.props.state.isBallTeam = true;
                            console.log(_this.props.state)
                        }
                    },
                    fun_Error(err) {

                    }
                })
            }

        }
        let { logo } = this.state
        return (
            <View>
                <Flex justify='center'>
                    {/* <ImagePicker
                    files={logo}
                    onChange={(files,data)=>{
                        this.setState({
                            logo:files
                        })
                    }}
                    selectable={logo.length<1}
                /> */}
                </Flex>
                <List>

                    <InputItem
                        type='text'
                        value={this.state.name}
                        placeholder="请输入球队名称"
                        clear
                        maxLength={10}
                        onChange={(val) => {
                            this.setState({
                                name: val
                            })
                        }}
                    />
                    <InputItem
                        type='text'
                        value={this.state.description}
                        placeholder="请输入球队简介"
                        clear
                        maxLength={10}
                        onChange={(val) => {
                            this.setState({
                                description: val
                            })
                        }}
                    />
                    <List.Item>
                        <Button onClick={() => {
                            register(this.state)
                            console.log(this.state);

                        }}>
                            注册
                        </Button>
                    </List.Item>
                </List>
            </View>
        )
    }
}
export default connect(state => ({ state }))(createBallTeam)