

import React, { Component } from 'react'
import { View, Text, ListView, StyleSheet, Image } from 'react-native'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import TimerEnhance from 'react-native-smart-timer-enhance'
import { WingBlank, Flex } from 'antd-mobile'
export default class ScrollView extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })
        let list = [];
        for (let i = 0; i < 100; i++) {
            list.push(i);
        }
        this.state = {
            dataSource: ds.cloneWithRows(list)
        }
    }
    componentDidMount() {
        this._pullToRefreshListView.beginRefresh()
        this._pullToRefreshListView.endRefresh()
    }
    _onRefresh = () => {
        this._pullToRefreshListView.endRefresh()
    }
    _onLoadMore = () => {
        console.log('aa')
        this._pullToRefreshListView.endRefresh()
    }
    render() {
        let ListItem = this.props.ListItem;
        return (
            <PullToRefreshListView
                pullUpDistance={35}
                pullDownDistance={35}
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                viewType={PullToRefreshListView.constants.viewType.listView}
                ref={(component) => this._pullToRefreshListView = component}
                contentContainerStyle={{ backgroundColor: 'yellow', }}
                initialListSize={20}
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) => (
                    <ListItem itemData={rowData}/>
                )}
            />
        )
    }
}