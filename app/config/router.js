import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import type1 from '../screens/type1';
import type2 from '../screens/type2';
import type3 from '../screens/type3';
import type4 from '../screens/type4';
import type5 from '../screens/type5';
import React, {Component} from 'react';
import {View, Text, StyleSheet , Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Tabs = createMaterialTopTabNavigator(
  {
    type1: {
      screen: type1,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>เมนูแนะนำ</Text>
          </View>
        ),
      },
    },
    type2: {
      screen: type2,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>เมนูจานด่วน</Text>
          </View>
        ),
      },
    },
    type3: {
      screen: type3,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>เกาเหลา</Text>
          </View>
        ),
      },
    },
    type4: {
      screen: type4,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>ก๋วยเตี๋ยว</Text>
          </View>
        ),
      },
    },
    type5: {
      screen: type5,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>เมนูทอด</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'type1',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: '#ff9500',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#000000',
      inactiveTintColor: 'gray',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: '',
      headerBackground: (
        <Image
          style={StyleSheet.absoluteFill}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        />
      ),
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
});
