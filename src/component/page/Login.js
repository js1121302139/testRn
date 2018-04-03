import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    findNodeHandle,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { connect } from 'react-redux'
import { InputItem, Flex, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import { login } from '../../redux/actionCreater'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '18559100810',// 用户手机号
            code: '582914',
            sendType: 1, // 短信验证码类型 会员注册
            viewRef: null,
            blur: 1,
            onError: false
        };
    }

    imageLoaded() {
        findNodeHandle(this.backgroundImage)
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    changePhoneNum = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({ onError: true })
        } else {
            this.setState({ onError: false })
        }
        this.setState({ phoneNum: value })
    }

    render() {
        let login = this.props.login;
        const styles = StyleSheet.create({
            container: {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            absolute: {
                position: "absolute",
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                top: 0, left: 0, bottom: 0, right: -4,
            },
            loginItem: {
                backgroundColor: '#fff',
                borderRadius: 5,
                paddingLeft: 10
            },
            loginLab: {
                fontSize: 12,
                color: '#333',
                marginRight: 15
            },
            loginInput: {
                fontSize: 12,
                color: this.state.onError ? '#f00' : '#333'
            },
            Button: {
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 2,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowColor: '#333',
                //注意：这一句是可以让安卓拥有灰色阴影
                elevation: 4,
            },
            ButtonTxt: {
                color: '#fff',
                fontSize: 12
            },
            loginButton: {
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#282828',
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 5,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowColor: '#282828',
                //注意：这一句是可以让安卓拥有灰色阴影
                elevation: 4,
            },
            loginButtonTxt: {
                color: '#fff',
                fontSize: 14
            }
        });
        return (
            <View style={styles.container}>
                <Image
                    ref={(img) => {
                        this.backgroundImage = img;
                    }}
                    source={require('../../static/loginBg.png')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
                <View style={styles.absolute}>

                </View>

                <View style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 0,
                    right: 0
                }}>
                    <WingBlank>
                        <Flex direction="column">
                            <Flex style={styles.loginItem}>
                                <Text style={styles.loginLab}>手机号:</Text>
                                <Flex.Item>
                                    <TextInput
                                        defaultValue={this.state.phoneNum}
                                        underlineColorAndroid="transparent"
                                        multiline={true}
                                        blurOnSubmit={true}
                                        keyboardType="numeric"
                                        maxLength={11}
                                        onChangeText={(val) => {
                                            this.changePhoneNum(val)
                                        }}
                                        style={styles.loginInput} placeholder="请输入手机号码" />
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Flex style={styles.loginItem}>
                                <Text style={styles.loginLab}>验证码:</Text>

                                <Flex.Item>
                                    <TextInput
                                        defaultValue={this.state.code}
                                        underlineColorAndroid="transparent"
                                        multiline={true}
                                        blurOnSubmit={true}
                                        keyboardType="numeric"
                                        onChangeText={(val) => {
                                            this.state.code = val
                                        }}
                                        style={styles.loginInput} placeholder="请输入验证码" />
                                </Flex.Item>
                                <TouchableHighlight
                                    onPress={() => {
                                        // store.dispatch(sendMessage({
                                        //     phoneNum: this.state.phoneNum,
                                        //     type: this.state.sendType
                                        // }))
                                    }}
                                >
                                    <View style={styles.Button}>
                                        <Text style={styles.ButtonTxt}>获取验证码</Text>
                                    </View>
                                </TouchableHighlight>
                            </Flex>
                        </Flex>
                    </WingBlank>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <View style={{
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View>
                            <TouchableHighlight style={{
                                width: 140,
                                height: 45
                            }}
                                onPress={() => {
                                    this.props.login({
                                        phoneNum:this.state.phoneNum,
                                        code:this.state.code
                                    })
                                }}
                            >
                                <View style={styles.loginButton}>
                                    <Text style={styles.loginButtonTxt}>登录</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>

            </View>
        );
    }

    componentDidMount() {
        const steep = 3;
        const timer = setInterval(() => {
            if (this.state.blur >= 2) {
                clearInterval(timer);
                return;
            }
            //this.setState({blur: this.state.blur += steep})
        }, 100)
    }

}
export default connect(state => ({ state }),{login})(LoginPage)

