import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ToastAndroid
} from 'react-native'

import {
    Flex,
    WhiteSpace,
    WingBlank,
    Tabs,
    List,
    ImagePicker,
    Popover,
} from 'antd-mobile'

import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';


import AveragingData from './ballTeamPage/averagingData'
import IssuedChallenge from './ballTeamPage/IssuedChallenge'
import Challenge from './ballTeamPage/challenge'
import Schedule from './ballTeamPage/schedule'
import GameVideo from './ballTeamPage/gameVideo'
import Announcement from './ballTeamPage/announcement'
import CreateBallTeam from './ballTeamPage/createBallTeam'

// import { setBallTeam } from '../../redux/actionCreater'


class BallTemaInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1]
        }
    }

    render() {
        const tabs = [
            {
                title: '资料'
            },
            {
                title: '发布挑战'
            },
            {
                title: '球队挑战'
            },
            {
                title: '球队赛程'
            },
            {
                title: '视频'
            },
            {
                title: '球队公告'
            }
        ]
        const Item = Popover.Item
        return (
            <View>
                <Popover mask
                         overlayClassName="fortest"
                         overlayStyle={{color: 'currentColor'}}
                         visible={true}
                         overlay={[
                             (<Item key="4" value="scan" icon={}
                                    data-seed="logId">Scan</Item>),
                             (<Item key="5" value="special" icon={}
                                    style={{whiteSpace: 'nowrap'}}>My Qrcode</Item>),
                             (<Item key="6" value="button ct" icon={}>
                                 <span style={{marginRight: 5}}>Help</span>
                             </Item>),
                         ]}
                         align={{
                             overflow: {adjustY: 0, adjustX: 0},
                             offset: [-10, 0],
                         }}
                         // onVisibleChange={this.handleVisibleChange}
                         // onSelect={this.onSelect}
                >
                    <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                        <Icon type="ellipsis"/>
                    </div>
                </Popover>
                <View style={style.teamInfo}>
                    <WingBlank>
                        <Flex>
                            <Image style={style.teamImg} source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}/>
                            <View style={style.teamRecord}>
                                <Text style={style.teamName}>兄弟队</Text>
                                <Flex justify="around">
                                    <Text style={style.result}>20胜</Text>
                                    <Text style={style.result}>20负</Text>
                                    <Text style={style.result}>连胜场次：8</Text>
                                </Flex>
                                <Text style={style.introduction}>简介。。。。。。。</Text>
                            </View>
                        </Flex>
                    </WingBlank>
                </View>
                <View style={{height: 1000}}>
                    <Tabs
                        tabs={tabs}
                        initialPage={0}
                    >
                        <View>
                            <AveragingData/>
                        </View>
                        <View>
                            <IssuedChallenge/>
                        </View>
                        <View>
                            <Challenge/>
                        </View>
                        <View>
                            <Schedule/>
                        </View>
                        <View>
                            {/*<GameVideo />*/}
                        </View>
                        <View>
                            <Announcement/>
                        </View>
                    </Tabs>
                </View>
            </View>
        )
    }
}

const aliUpload = (upData) => {
    console.log(upData)
}

class BallTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBallTeam: true
        }
    }

    componentWillMount() {
        const userInfo = this.props.state
        if (userInfo.token === '') {
            Actions.login()
        }
        let _this = this;
        fetchData('team/info/getMyTeamList', 'post', {
            data: {
                memberToken: userInfo.token,
                pageNum: 1,
                pageSize: pageSize
            },
            fun_Success(resData) {
                if (resData.retCode === retTrue) {
                    if (resData.rows.length === 0) {
                        _this.setState({
                            isBallTeam: false
                        })
                    }
                } else {
                    console.log('login')
                    Actions.login()
                    ToastAndroid(resData.message, ToastAndroid.SHOT)
                }
            },
            fun_Error() {

            }
        })
    }

    render() {
        return (
            this.state.isBallTeam ? <BallTemaInfo/> : <CreateBallTeam token={this.props.state.token}/>
        )
    }
}

const style = StyleSheet.create({
    teamInfo: {
        paddingVertical: 10,
        backgroundColor: '#fff'

    },
    teamImg: {
        height: 44,
        width: 44,
        marginRight: 15,
        borderRadius: 22
    },
    teamName: {
        fontSize: 16,
        marginBottom: 5
    },
    teamRecord: {},
    result: {
        fontSize: 12,
        marginRight: 5,
        color: '#333'
    },
    introduction: {
        fontSize: 14,

    }

})
export default connect(state => ({state}))(BallTeam)