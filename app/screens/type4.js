import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const type1 = () => {
    return (
      <ScrollView>
      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/banners/nt1.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>ก๋วยเตี๋ยวเรือน้ำตก</Text>
            <Text style={styles.cardDetails}>
              50 บาท
            </Text>
          </View>
        </View>
        <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/banners/nt2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>ก๋วยเตี๋ยวต้มยำ</Text>
            <Text style={styles.cardDetails}>
              50 บาท
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
      
    );
};

export default type1;

const styles = StyleSheet.create({
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
