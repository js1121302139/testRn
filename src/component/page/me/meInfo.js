import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ToastAndroid,
    Platform,
    Keyboard
} from 'react-native'

import { InputItem, Flex, Tabs, List, Button, WingBlank, WhiteSpace, DatePicker, TextareaItem, Picker } from 'antd-mobile'
import { fetchData } from '../../common/util';
import {dataDictionary} from '../../common/fetchDictionary';

const Item = List.Item;
const Brief = Item.Brief;

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];

const upPlayerInfo=(playerData)=>{
    console.log('upPlayerInfo')
    console.log(checkDataIsNull(playerData,['introduction','birthday']));
    
    if(!checkDataIsNull(playerData,['introduction','birthday'])){
        // ToastAndroid('请完整填写数据',ToastAndroid.SHORT);
        return false
    }
    fetchData('player/basketball/info/update','post',{
        data:playerData,
        fun_Success(resData){
            if(resData.retCode===0){
               // ToastAndroid('资料上传成功',ToastAndroid.SHORT)
            }
        },
        fun_Error(err){

        }
    })
}

class ShowBtn extends Component {
    render(){
        if (!this.props.show) {
            return <Button type="primary" onClick={()=>{
                upPlayerInfo(this.props.playerInfo)
            }}>添加资料</Button>
        }
        return <View></View>;
    }
}

class MeInfo extends Component {
    static navigationOptions = {
        headerTitle: '我的信息',
        tabBarLabel: '我的信息',
        tabBarIcon: <View style={{ height: 30, width: 30, backgroundColor: 'red' }}></View>
    };
    constructor(props) {
        super(props)
        this.state = {
            ISPLAYERINFO: true,
            playerInfo: {
                memberToken: this.props.state.token,
                position: '10',
                height: '',
                weight: '',
                birthday: '',
                introduction: ''
            },
            dataDictionaryData:[]
        }
    }
    componentWillMount() {
        let _this = this;
        dataDictionary('DIC_TEAM_POSITION',resData=>{
            _this.setState({
                dataDictionaryData:resData
            })
        })
        fetchData('player/basketball/info/exist', 'POST', {
            data: {
                memberToken: this.props.state.token
            },
            fun_Success(resData) {
                if (resData.retCode === 0) {
                    // 根据接口的返回值进行赋值 true and false
                    _this.setState({
                        ISPLAYERINFO: resData.data
                    })
                    console.log(
                        _this.state
                    )
                    console.log(this.state.ISPLAYERINFO)
                } else {
                    ToastAndroid.show(resData.message, ToastAndroid.SHORT)
                }
            },
            fun_Error(err) {

            }
        })
        fetchData('player/basketball/info/get', 'POST', {
            data: {
                memberToken: this.props.state.token
            },
            fun_Success(resData) {
                let userData = resData.data;
                _this.setState({
                    playerInfo:{
                        position:`${userData.position}`,
                        height:String(userData.height),
                        weight:String(userData.weight),
                        birthday:new Date(userData.birthday),
                        introduction:String(userData.introduction)
                    }
                })
                console.log(_this.state.playerInfo,'_this.state.playerInfo')
            },
            fun_Error(err) {

            }
        })
    };
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        const tabs = [{
            title: '我的信息'
        }, {
            title: '技术统计'
        }];
        return (
            <View>
                <Flex direction="column" justify="center" style={style.userTop}>
                    <Image source={ImgNull(this.props.state.headPicture)}
                        style={style.userHead}
                    />
                    <Text style={style.userName}>{this.props.state.name}</Text>
                </Flex>
                <View style={{ height: 500 }}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => {
                            console.log('onChange', index, tab);
                        }}
                        onTabClick={(tab, index) => {
                            console.log('onTabClick', index, tab);
                        }}
                    >
                        <View>
                            <List>
                                <InputItem
                                    type="number"
                                    placeholder="请输入身高(CM)"
                                    clear
                                    moneyKeyboardAlign="left"
                                    clear={true}
                                    value={this.state.playerInfo.height}
                                    onChange={(data)=>{
                                        this.setState({
                                            playerInfo:{
                                                ...this.state.playerInfo,
                                                height:data
                                            }
                                        })
                                    }}
                                    disabled={this.state.ISPLAYERINFO}
                                >身高</InputItem>
                                <InputItem
                                    type="number"
                                    placeholder="请输入体重(KG)"
                                    clear
                                    value={this.state.playerInfo.weight}
                                    onChange={(data)=>{
                                        this.setState({
                                            playerInfo:{
                                                ...this.state.playerInfo,
                                                weight:data
                                            }
                                        })
                                    }}
                                    moneyKeyboardAlign="left"
                                    clear={true}
                                    disabled={this.state.ISPLAYERINFO}
                                >体重</InputItem>
                                <DatePicker
                                    mode="date"
                                    title="Select Date"
                                    extra="请选择生日"
                                    minDate={new Date('1900/1/1')}
                                    maxDate={new Date()}
                                    value={this.state.playerInfo.birthday}
                                    disabled={this.state.ISPLAYERINFO}
                                    onChange={date => this.setState({ playerInfo: { ...this.state.playerInfo, birthday: date } })}
                                >
                                    <Item>生日</Item>
                                </DatePicker>
                                <Picker
                                    cols={1}
                                    data={
                                      this.state.dataDictionaryData
                                    }
                                    value={this.state.playerInfo.position}
                                    disabled={!this.state.ISPLAYERINFO}
                                    onChange={data => {
                                        console.log(this.state.playerInfo.position, data)
                                        this.setState({ playerInfo: { ...this.state.playerInfo, position: data[0] } })
                                    }}
                                >
                                    <Item>
                                        球队位置
                                    </Item>
                                </Picker>
                                <InputItem
                                    type="number"
                                    placeholder="请输入球员简介"
                                    clear
                                    onChange={(data)=>{
                                        this.setState({
                                            playerInfo:{
                                                ...this.state.playerInfo,
                                                introduction:data
                                            }
                                        })
                                    }}
                                    value={this.state.playerInfo.introduction}
                                    disabled={this.state.ISPLAYERINFO}
                                    moneyKeyboardAlign="left"
                                >球员简介</InputItem>
                            </List>
                            <WhiteSpace />
                            <WingBlank size="lg">
                                <ShowBtn show={this.state.ISPLAYERINFO} playerInfo={this.state.playerInfo} />
                                {/* <Button type="primary">修改资料</Button> */}
                            </WingBlank>
                        </View>
                        <View>
                            <Text>2</Text>
                        </View>
                    </Tabs>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    userHead: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333'
    },
    userTop: {
        height: 130,
        backgroundColor: '#fff',

    },
    userName: {
        marginTop: 10,
        fontSize: 20,

    }
})

export default connect(state => ({ state }))(MeInfo)


