import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class type2 extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>type2 Page</Text>
      </View>
    );
  }
}

export default type2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 80,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
  OrderDetails: {
    fontSize: 12,
    color: '#444',
  },
  cardImgWrapper: {
    flex: 1,
  },
cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  }
});
