import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import {
    Flex,
    Tabs,
    List,
    Button,
    WingBlank,
    WhiteSpace
} from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];


export default class MeInfo extends Component {
    static navigationOptions = {
        headerTitle: '我的信息',
        tabBarLabel: '我的信息',
        tabBarIcon: <View style={{height: 30, width: 30, backgroundColor: 'red'}}></View>
    };

    render() {
        const tabs = [{
            title: '我的信息'
        }, {
            title: '技术统计'
        }];
        return (
            <View>
                <Flex direction="column" justify="center" style={style.userTop}>
                    <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}
                           style={style.userHead}
                    />
                    <Text style={style.userName}>hhh</Text>
                </Flex>
                <View style={{height:500}}>
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
                               <Item extra={'extra content'}>身高</Item>
                               <Item extra={'extra content'}>体重</Item>
                               <Item extra={'extra content'}>生日</Item>
                               <Item extra={'extra content'}>球队位置</Item>
                               <Item

                                   multipleLine
                                   onClick={() => {}}
                                   platform="android"
                               >
                                   球员简介<Brief>There may have water ripple effect of  material if you set the click event.</Brief>
                               </Item>
                           </List>
                           <WhiteSpace/>
                           <WingBlank size="lg">
                               <Button type="primary">修改资料</Button>
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


