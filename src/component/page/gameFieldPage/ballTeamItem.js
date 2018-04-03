import React, {Component, PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    findNodeHandle,
    UIManager
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Flex,
    SearchBar,
    Grid,
    PullToRefresh,
    DatePicker,
    Picker,
    List,
    Button
} from 'antd-mobile'

export default class BallTeamItem extends Component {
    _onLayout(event) {
        console.log(event.nativeEvent.layout)
        //使用大括号是为了限制let结构赋值得到的变量的作用域，因为接来下还要结构解构赋值一次
        {
            //获取根View的宽高，以及左上角的坐标值
            let {x, y, width, height} = event.nativeEvent.layout;
            console.log('通过onLayout得到的宽度：' + width);
            console.log('通过onLayout得到的高度：' + height);
            console.log('通过Dimensions得到的高度：' + x);
            console.log('通过Dimensions得到的高度：' + y);
        }

        //通过Dimensions API获取屏幕宽高
        let {width, height} = Dimensions.get('window');
        console.log('通过Dimensions得到的宽度：' + width);
        console.log('通过Dimensions得到的高度：' + height);

    }
    render() {
        const m = [1,2,3,4,5,6,7,8,9,0,11,13,14,15,16,17];
        return (
            <View style={{overflow:'visible'}}
                  onLayout={this._onLayout}
            >
                <View style={style.TopTit}>
                    <WingBlank>
                        <Flex justify="between" style={style.TopTit}>
                            <Text style={style.topItem}>球队</Text>
                            <Text style={style.topItem}>胜</Text>
                            <Text style={style.topItem}>负</Text>
                            <Text style={style.topItem}>胜率</Text>
                        </Flex>
                    </WingBlank>
                </View>
                <View style={{
                    height:480
                }}>
                    <FlatList
                        ref="listBox"
                        data={m}
                        keyExtractor={(item,index)=>item.toString()}
                        renderItem={(item)=>{
                            return(
                                <View key={item} style={style.teamItem}>
                                    <WingBlank>
                                        <Flex>
                                            <Flex>
                                                <Image style={style.ballTeamImg} source={{uri:'https://www.baidu.com/img/bd_logo1.png?where=super'}}/>
                                                <Text style={style.teamName}>xxxx</Text>
                                            </Flex>
                                            <Text style={style.teamData}>{item.index}</Text>
                                            <Text style={style.teamData}>10%</Text>
                                            <Text style={style.teamData}>80%</Text>
                                        </Flex>
                                    </WingBlank>
                                </View>
                            )
                        }}
                    />
                </View>
                {/*<List>*/}
                    {/*{*/}
                        {/*m.map(item =>{*/}
                            {/**/}
                        {/*})*/}
                    {/*}*/}
                {/*</List>*/}
            </View>
        )
    }
    componentDidMount(){
        console.log(this.refs.listBox.props)
    }
}

const style = StyleSheet.create({
    TopTit: {
        height: 50,
        marginBottom:5,
        backgroundColor: '#fff'
    },
    topItem:{
        flex:1,
        fontSize:16,
        textAlign:'center',
        color:'#333'
    },
    teamItem:{
        paddingVertical:10,
        backgroundColor:'#fff',
        marginBottom:10
    },
    ballTeamImg:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#ccc'
    },
    teamName:{
        color:'#333',
        marginLeft:5,
        fontSize:14
    },
    teamData:{
        flex:1,
        textAlign:'center',
        fontSize:14,
        color:'#333'

    }
})