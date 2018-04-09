import React, { Component } from 'react'
import { View, Text , Image} from 'react-native'
import  { List,Flex, Checkbox } from 'antd-mobile'
export default class BallTeamList extends Component{
    render(){
        const  Item = List.Item;
        const  Brief = Item.Brief;
        const  CheckBoxItem = Checkbox.CheckboxItem
        return(
            <View>
                <List>
                    <CheckBoxItem>
                    <Image
                        style={{width:40,height:40,borderRadius:20}}
                        source={{uri:'https://www.baidu.com/img/baidu_jgylogo3.gif'}}

                    />
                       xxxqiudui
                        <Brief>
                            胜场:80场 共:80场 胜率:100%
                        </Brief>

                    </CheckBoxItem>

                </List>
            </View>
        )
    }
}