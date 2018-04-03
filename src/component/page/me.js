import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { Card, WingBlank, WhiteSpace, List, Flex } from 'antd-mobile'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux';

class Me extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log('-----++++---')
    }
    componentDidMount() {
        if(this.props.state.token===''){
            Actions.login()
        }
    }
    render() {

        // fetchData('aa',{
        //     method:""
        // })
        const { navigate } = this.props.navigation;
        return (
            <View style={style.Info}>
                <View style={style.userCard}>
                    <WingBlank>
                        <Flex>
                            <Image source={{ uri: 'https://www.baidu.com/img/bd_logo1.png' }}
                                style={{ height: 75, width: 75, borderRadius: 37, marginRight: 10, borderWidth: 1, borderColor: '#000' }} />
                            <View>
                                <Text style={style.userName}>Mr.js</Text>
                                <Flex>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                    <Text style={style.userLabe}>
                                        球迷
                                    </Text>
                                </Flex>
                            </View>
                        </Flex>
                    </WingBlank>
                </View>
                <Flex style={style.meInfo}>
                    <Flex.Item>
                        <View style={style.meInfoBox}>
                            <Text style={style.meInfoTxt} onPress={() => { openPage(this, 'MeInfo', { title: 'wode', des: 'hhh' }) }}>
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

export default connect(state => ({ state }))(Me)