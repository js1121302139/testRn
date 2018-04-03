import React, {Component, PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import {
    Flex,
    WingBlank,
    List,
    Tag,
    WhiteSpace
} from 'antd-mobile'

import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'

export default class BallHallInfo extends Component {
    render() {
        return (
            <View style={styles.ballHallInfoPage}>
                <View style={styles.hallInfo}>
                    <WingBlank>
                        <Flex>
                            <Image style={styles.hallImgs}
                                   source={{uri: 'https://www.baidu.com/img/bd_logo1.png?where=super'}}/>
                            <View>
                                <Text style={styles.hallInfoName}>xxx俱乐部</Text>
                                <StarRatingBar
                                    score={2.3}
                                    allowsHalfStars={true}
                                    accurateHalfStars={true}
                                />
                                <Flex>
                                    <Tag small>发票</Tag>
                                </Flex>
                            </View>
                        </Flex>
                    </WingBlank>
                </View>
                <View style={styles.tip}>
                    <WingBlank>
                        <Text style={styles.tipTit}>
                            温馨提示：
                        </Text>
                        <Text style={styles.tipTit}>
                            一经下单不予退款xxxxxxxxxxxxxxxxxx
                        </Text>
                    </WingBlank>
                </View>
                <View style={styles.address}>
                    <Flex justify="between">
                        <View style={styles.hallIcon}>
                            <Text>地址</Text>
                        </View>
                        <Flex.Item>
                            <Text style={styles.addressTxt} rr>
                                北京市朝阳区十八店xxxxxxxxxxxxxxxxhd
                            </Text>
                        </Flex.Item>
                        <View style={styles.hallIcon}>
                            <Text>
                                ☎️
                            </Text>
                        </View>
                    </Flex>
                </View>
                <View style={styles.hallConfiguration}>
                    <View style={styles.hallConfigTit}>
                        <Text style={styles.hallConfigTitTxt}>场地设施</Text>
                    </View>
                    <View>
                        <Flex>
                            <Text style={styles.configTxt}>
                                地板
                            </Text>
                            <Text style={styles.configTxt}>
                                塑胶地板
                            </Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.configTxt}>
                                灯光
                            </Text>
                            <Text style={styles.configTxt}>
                                侧灯
                            </Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.configTxt}>
                                休息区
                            </Text>
                            <Text style={styles.configTxt}>
                                风扇`空调
                            </Text>
                        </Flex>
                    </View>
                    <View style={styles.hallConfigTit}>
                        <Text style={styles.hallConfigTitTxt}>场地设施</Text>
                    </View>
                    <View>
                        <Flex>
                            <Text style={styles.configTxt}>
                                地板
                            </Text>
                            <Text style={styles.configTxt}>
                                塑胶地板
                            </Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.configTxt}>
                                灯光
                            </Text>
                            <Text style={styles.configTxt}>
                                侧灯
                            </Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.configTxt}>
                                休息区
                            </Text>
                            <Text style={styles.configTxt}>
                                风扇`空调
                            </Text>
                        </Flex>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ballHallInfoPage: {
        backgroundColor: '#fff'
    },
    hallInfo: {
        paddingBottom:20
    },
    hallImgs: {
        width: 135,
        height: 95,
        marginRight: 10
    },
    hallInfoName: {
        fontSize: 14,
        color: '#333'
    },
    serviceLables: {
        display: 'flex',
        paddingVertical: 6,
        paddingHorizontal: 3,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10
    },
    tip: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
    },
    address: {
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    hallIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#ccc'
    },
    addressTxt: {
        paddingHorizontal: 3
    },
    hallConfiguration:{
        paddingVertical:5,
        paddingHorizontal:20,
        borderColor:'#fff'
    },
    hallConfigTit:{
        paddingVertical:10
    },
    hallConfigTitTxt:{
        color:'#333',
        fontSize:13
    },
    configTxt:{
        fontSize:12,
        color:'#333',
        paddingVertical:5,
        paddingHorizontal:5,
        textAlign:'right'
    }
})