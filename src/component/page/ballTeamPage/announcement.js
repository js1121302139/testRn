import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { List } from 'antd-mobile'
export default class Announcement extends Component{
    render(){
        const ListItem = List.Item
        const Brief = ListItem.Brief
        return(
            <View>
                <List>
                    <ListItem
                        multipleLine
                        onClick={() => {}}
                    >
                        2018-03-31 09:00:00 <Brief style={{paddingLeft:12}}>There may have water ripple effect of material if you set the click event.</Brief>

                    </ListItem>
                </List>
            </View>
        )
    }
}