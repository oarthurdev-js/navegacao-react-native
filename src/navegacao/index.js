import React from 'react'
import {SafeAreaView} from  'react-native'
import {NavigationContainer} from '@react-navigation/native'
//import Stack from './Stack'
import Tabs from './Tabs'
//import Drawer from './Drawer'


export default  props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Tabs />
            {/*<Stack />*/}
            {/*<Drawer />*/}
        </NavigationContainer>
    </SafeAreaView>
)