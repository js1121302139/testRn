import React, { Component } from 'react'
import {ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { ImgNull } from '../../common/util';
import { connect } from 'react-redux'

import { Flex, Tabs, WingBlank } from 'antd-mobile'
class LeagueInfo extends Component {
    render() {
        return (
            <ScrollView>
                <WingBlank>
                    <Flex align="start" justify="start" direction="column">
                        <Image style={{ height: 150, alignSelf: 'center' }} source={ImgNull('')} />
                        <Flex >
                            <Text style={styles.tit}>简介</Text><Text>惺惺惜惺惺想寻寻寻寻寻寻寻寻寻寻寻寻寻</Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.tit}>赛制</Text><Text>5 V 5</Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.tit}>比赛地点</Text><Text>软件园</Text>
                        </Flex>
                        <Flex>
                            <Text style={styles.tit}>比赛时间</Text><Text>2018-05-01~2018-05-03</Text>
                        </Flex>
                    </Flex>
                </WingBlank>
                <View>
                    <Tabs tabs={[{ title: '赛程' }, { title: '排名' }, { title: '统计' }, { title: '视频' }]}>
                        <View>
                            <Text>赛程</Text>
                        </View>
                        <View>
                            <Text>排名</Text>
                        </View>
                        <View>
                            <Text>统计</Text>
                        </View>
                        <View>
                            <Text>视频</Text>
                        </View>
                    </Tabs>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    tit:{
        marginRight: 10,
        width:50
    }
})
export default connect(state => ({ state }))(LeagueInfo)








