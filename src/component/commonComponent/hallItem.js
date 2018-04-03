import React, {Component, PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'

import {
    Carousel,
    Flex,
    WingBlank
} from 'antd-mobile'

export default class hallItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.hallItem}>
                <WingBlank>
                    <Flex >
                        <Image style={styles.hallImg} source={{uri:'https://www.baidu.com/img/bd_logo1.png?where=super'}}/>
                        <View style={styles.hallInfo}>
                            <Text style={styles.hallName}>数字空间篮球官</Text>
                            <StarRatingBar
                                score={2.3}
                                allowsHalfStars={true}
                                accurateHalfStars={true}
                            />
                            <Text style={styles.hallAddr}>仓山万达    2000M</Text>
                        </View>
                    </Flex>
                </WingBlank>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    hallItem:{
        paddingVertical:5,
        backgroundColor:'#fff'
    },
    hallImg:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:12,
        borderWidth:1,
        borderColor:'#333'
    },
    hallInfo:{

    },
    hallName:{
        fontSize:13,
        color:'#333'
    },
    hallAddr:{
        fontSize:12
    }
})