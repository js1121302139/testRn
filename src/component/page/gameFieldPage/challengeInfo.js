import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Flex, List, InputItem, TextareaItem, Button, DatePicker, WhiteSpace, WingBlank } from 'antd-mobile'
import { Actions } from 'react-native-router-flux';
class ChallengeInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            sendData:{

            }
        }
    }
    render() {
        const Item = List.Item
        return (
            <View>
                <WingBlank>
                    <Flex align="start" justify="between">
                        <Flex direction="column" >
                            <Text >
                                我的球队
                        </Text>
                            <Image style={styles.teamImg} source={ImgNull('')} />
                            <Text>
                                xxx球队
                        </Text>
                            <Button size="sm" onClick={Actions.ballTeamList}>选择我的球队</Button>
                        </Flex>
                        <View style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf:'center'
                        }}>
                            <Text>
                                VS
                        </Text>
                        </View>
                        <Flex direction="column">
                            <Text>
                                挑战球队
                        </Text>
                            <Image style={styles.teamImg} source={ImgNull('')} />
                            <Text>
                                xxx球队
                        </Text>
                        </Flex>
                    </Flex>
                </WingBlank>
                <List>
                    <DatePicker>
                        <Item
                            extra={'22222'}
                        >
                            时间
                             </Item>
                    </DatePicker>
                    <Item onClick={Actions.map}>
                        地址
                    </Item>
                    <InputItem>联系人</InputItem>
                    <InputItem>手机号</InputItem>
                    <TextareaItem/>
                </List>
                <Button>开始队内签到</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    teamImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
})

export default connect(state => ({ state }))(ChallengeInfo)