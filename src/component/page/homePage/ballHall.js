import React, {Component, PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import {
    Carousel
} from 'antd-mobile'

import BallHallItem from '../../commonComponent/hallItem'
// import { openPage } from '../../commonUtil/util'
export default class BallHall extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render(){
        return(
            <View>
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                            <Image
                                key={val}
                                style={{
                                    height:150
                                }}
                                source={{uri:`https://zos.alipayobjects.com/rmsportal/${val}.png`}}
                            />
                    ))}
                </Carousel>
                <TouchableOpacity
                    onPressIn={() => openPage(this,'BallHallInfo')}
                >
                    <BallHallItem />
                </TouchableOpacity>
            </View>
        )
    }
}