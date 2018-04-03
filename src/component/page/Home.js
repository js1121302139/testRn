import React, { Component,PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../redux/actionCreater'

import {
    WhiteSpace,
    WingBlank,
    Flex,
    SearchBar,
    Grid
} from 'antd-mobile'

import ScrollView from '../commonComponent/scroll'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {PullView} from 'react-native-pull'

import bs from '../../static/bs.png'
import cd from '../../static/cd.png'
import yd from '../../static/yd.png'
import zb from '../../static/zb.png'
class GameItem extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.title
        }
        
    }
    render() {
        let itemData = this.props.itemData;
        const gameItem = StyleSheet.create({
            gameItemBox: {
                display: 'flex',
                backgroundColor: '#fff',
                paddingVertical: 12
            },
            gameInfo: {
                display: 'flex',
                flex: 1,

            },
            titleTxt: {
                fontSize: 16,
                color: '#333'
            },
            gameTeam: {
                color: "#999",
                fontSize: 14
            },
            gameDate: {
                color: "#999",
                fontSize: 14,

            }
        })
        return (
            <View style={gameItem.gameItemBox}>
                <View>
                    <Image source={require('../../static/qiuguan.jpg')}
                           style={{height: 150, width:350, marginBottom:5,borderRadius:12}}/>
                </View>
                <View>
                    <WingBlank size="sm">
                        <View style={gameItem.title}>
                            <Text style={gameItem.titleTxt}>初苗体育场{itemData}</Text>
                        </View>
                        <Flex justify="between">
                            <Text style={gameItem.gameTeam}>福州软件园F区</Text>
                            <Text style={gameItem.gameDate}>{itemData}M</Text>
                        </Flex>
                    </WingBlank>
                </View>
            </View>
        )
    }

}

class GridItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = this.props.data;
        return(
            <View style={{
                display:'flex',
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>

                <Image style={{
                    width:30,
                    height:30,
                    marginBottom:5
                }} source={data.icon} />
                <Text>{data.text }</Text>
            </View>
        )
    }
}
class BallHall extends Component {
    state = {
        //date: now,
        sValue: '',
        data: [
            {
                icon: cd,
                text: '挑战赛',
                page: 'gameField'
            },
            {
                icon: bs,
                text: '联赛',
                page: 'gameField'
            },
            // {
            //     icon: zb,
            //     text: '直播'
            // },
            {
                icon: yd,
                text: '球馆预定',
                page: 'ballHall'
            }, {
                icon: zb,
                text: '商城',
                page: 'mell'
            }
        ]
    }
    static navigationOptions = {
        header: null,
        // headerTitle: <HomeBar></HomeBar>,
        // title: <HomeBar></HomeBar>,
        // headerStyle: {
        //     height: 40
        // }
    }

    render() {
        return (
            <View>
                <View style={style.searchBar}>
                    <Flex justify="between">
                        <Icon style={style.address} name="room" size={20} color="#f00">
                            <Text style={style.addressTxt}>福州</Text>
                        </Icon>
                        <Flex.Item>
                            <SearchBar
                                placeholder="输入球馆名称、地址"
                                cancelText="搜索"
                                showCancelButton={true}
                                onClear={value => console.log(value, 'onClear')}
                            />
                        </Flex.Item>
                    </Flex>
                </View>
                <View style={style.topFun}>
                    <WingBlank>
                        <Grid data={this.state.data}
                              square={false}
                              hasLine={false}
                              onClick={(el, obj) => {
                                  Actions[el.page].call()
                              }}
                              renderItem={(el,index)=><GridItem data={el}/>}
                              columnNum={3}/>
                    </WingBlank>
                </View>
                <WhiteSpace/>
                <View style={{
                    height: 310
                }}>
                    <ScrollView ListItem = {GameItem}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    topFun: {
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    address: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,
        lineHeight: 20,
        marginRight: 5
    },
    addressTxt: {
        fontSize: 12
    },
    searchBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    search: {},
    selectBallHallBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        // backgroundColor:'#999'
    },
    selectBallHall: {
        height: 30,
        width: 200
    },
    selectBallHallTxt: {
        fontSize: 12
    },
    dateForm: {}
})


export default connect(state=>({state}),{login})(BallHall)