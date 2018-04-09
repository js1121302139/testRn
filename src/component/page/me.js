import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    DeviceEventEmitter
} from 'react-native'
import { connect } from 'react-redux'
import { Card, WingBlank, WhiteSpace, List, Flex } from 'antd-mobile'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux';
import { fetchData, storageGet } from '../common/util';
import { setToken, getUserInfo, setUserInfo } from '../../redux/actionCreater';
import { store } from '../../redux/reducer'
class Me extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (this.props.states.token === '') {
            Actions.login()
            //this.props.getUserInfo(this.props.states.token)
        }
        if(this.props.states.name===''){
            this.props.getUserInfo(this.props.states.token)
        }
    }

    componentWillReceiveProps(nextProps) {
        // 前一个页面传递过来一个名字叫做isRefresh的布尔型参数
        this.props.getUserInfo(nextProps.token)
        console.log(this.props.states)
        // this.props.getUserInfo(nextProps.token)
        // Actions.refresh()
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('Login', val => {
            console.log('ADDEVENT', val)
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.Info}>
                <View style={style.userCard}>
                    <WingBlank>
                        <Flex>
                            <Image source={ImgNull(this.props.states.headPicture)}
                                style={{ height: 75, width: 75, borderRadius: 37, marginRight: 10, borderWidth: 1, borderColor: '#000' }} />
                            <View>
                                <Text style={style.userName}>{this.props.states.name}</Text>
                                <Flex>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    {/* <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text> */}
                                </Flex>
                            </View>
                        </Flex>
                    </WingBlank>
                </View>
                <Flex style={style.meInfo}>
                    <Flex.Item>
                        <View style={style.meInfoBox}>
                            <Text style={style.meInfoTxt} onPress={
                                Actions.meInfo
                                // () => {
                                //     console.log(this.props.states);
                                // }

                            }>
                                球员信息
                            </Text>
                        </View >
                    </Flex.Item>
                    <Flex.Item>
                        <View style={style.meInfoBox}>
                            <Text style={style.meInfoTxt}>
                                球队信息
                            </Text>
                        </View>
                    </Flex.Item>
                </Flex>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <List>
                    <List.Item>
                        我的收藏
                    </List.Item>
                </List>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Info: {
        backgroundColor: '#333'
    },
    userCard: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#fff'
    },
    userName: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333'
    },
    userLabe: {
        fontSize: 10,
        color: '#333',
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderRadius: 20,
        marginHorizontal: 3,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#fff'
    },
    meInfo: {
        paddingVertical: 10,
        backgroundColor: '#fefefe',
    },
    meInfoBox: {
        display: 'flex',
        alignItems: 'center'
    },
    meInfoTxt: {
        fontSize: 16,
        color: '#333'
    }
})

export default connect(states => ({ states }), { setToken, getUserInfo, setUserInfo })(Me)