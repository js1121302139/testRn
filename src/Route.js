import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Scene, Router, Modal, Stack, Tabs } from 'react-native-router-flux'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { setToken } from './redux/actionCreater'
// 主要的四个页面
import Home from './component/page/Home'
import GameField from './component/page/gameField'
import BallTeam from './component/page/ballTeam'
import Me from './component/page/me'
// 子页面
import Mell from './component/page/homePage/mell'
import LoginPage from './component/page/Login'
import HallInfo from './component/page/homePage/ballHallInfo'
import BallHall from './component/page/homePage/ballHall'
import { storageGet } from './component/common/util';

const TabIcon = (props) => {
    return (
        <View>
            <Image
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height: 27, width: 27, marginTop: 5 }]}
            />
            <Text>
                {props.title}
            </Text>
        </View>
    )
};

class Route extends Component {
    render() {
        
        return (
            <Router>
                <Modal hideNavBar
                    transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>
                    <Stack hideNavBar headerMode='screen' key="root">
                        <Tabs
                            key="tabbar"        // 唯一标识
                            wrap={true}         // 自动使用自己的导航栏包装每个场景
                            showLabel={false}   // 显示文字
                            tabBarStyle={{
                                height: 50,
                            }} // tabBar的样式
                            swipeEnabled={false}// 是否可以滑动
                            headerMode='screen' // 页面切换方式
                            icon={TabIcon}
                            lazy={true}         // 是否默认渲染tabbar
                            tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                            activeBackgroundColor='white'   // 选中tabbar的背景色
                            inactiveBackgroundColor='#fff' // 未选中tabbar的背景色
                            activeTintColor=''       // 选中tabbar图标的颜色
                            inactiveTintColor=''        // 未选中tabbar图标的颜色
                            // tabBarOnPress={(props) => {
                            //     // Actions[getNavName(props)].call();
                            // }}
                        >
                            <Stack key='page1' initial={true} title="球馆"
                                image={require("./static/cd.png")}
                                selectedImage={require("./static/cd.png")}
                            >
                                <Scene hideNavBar component={Home} key="test1_key" />
                            </Stack>
                            <Stack key='gameField' title="球赛"
                                image={require("./static/cd.png")}
                                selectedImage={require("./static/cd.png")}
                            >
                                <Scene hideNavBar component={GameField} key="test1_key" />
                            </Stack>
                            <Stack key='ballTeam' title="球队"
                                image={require("./static/cd.png")}
                                selectedImage={require("./static/cd.png")}
                            >
                                <Scene hideNavBar component={BallTeam} key="BallTeam" />
                            </Stack>
                            <Stack key='Me' title="我的"
                                image={require("./static/cd.png")}
                                selectedImage={require("./static/cd.png")}
                            > 
                                <Scene hideNavBar component={Me} key="Me" />
                            </Stack>
                        </Tabs>
                        <Stack key="mell">
                            <Scene
                                title={this.state}
                                back={true}
                                gesturesEnabled={false}
                                onExit={() => console.log('onExit')}
                                onLeft={Actions.pop}
                                component={Mell}
                                key="Mell" />
                        </Stack>
                        <Stack key="login">
                            <Scene
                                hideNavBar
                                gesturesEnabled={false}
                                onExit={() => console.log('onExit')}
                                onLeft={Actions.pop}
                                component={LoginPage}
                                key="Login" />
                        </Stack>
                         <Stack key="ballHall">
                            <Scene
                                gesturesEnabled={false}
                                onExit={() => console.log('onExit')}
                                onLeft={Actions.pop}
                                component={BallHall}
                                key="Mell" />
                        </Stack>
                        <Stack key="hallInfo">
                            <Scene
                                title="详情"
                                back={true}
                                gesturesEnabled={false}
                                onExit={() => console.log('onExit')}
                                onLeft={Actions.pop}
                                component={HallInfo}
                                key="HallInfo" />
                        </Stack>
                    </Stack>
                </Modal>
            </Router>
        )
    }
}
export default connect(state=>({state}),{setToken})(Route)