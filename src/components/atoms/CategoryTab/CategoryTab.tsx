import React from 'react';
import {ReactChild} from 'react';
import {StyleSheet, ViewStyle, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
export interface PrimaryButtonProps {
  text?: string;
  width?: string;
  customCls?: ViewStyle;
  fullButton?: boolean;
  onPress?: () => void;
  children?: ReactChild;
}

export default function CategoryTab({
  text,
  customCls,
  onPress = () => {},
  children,
}: PrimaryButtonProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.imgContainer, {borderRadius: 100}]}>
        {children}
        {/* {text === 'MATCHMAKING' && (
          <FontAwesome name="heartbeat" size={24} color="white" />
        )}
        {text === 'BLOG' && (
          <FontAwesome5 name="blog" size={24} color="white" />
        )}
        {text === 'KUNDLI' && (
          <Entypo name="open-book" size={24} color="white" />
        )}
        {text === 'HOROSCOPE' && (
          <MaterialCommunityIcons name="zodiac-virgo" size={24} color="white" />
        )} */}
      </View>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.footerText, FONTS.secondaryFam]}>{text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  imgContainer: {
    borderRadius: 100,
    marginBottom: 5,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary[100],
  },
  imageWrapper: {
    borderRadius: 100,
  },
  footerText: {
    maxWidth: SIZES.width / 5,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: COLORS.primary[500],
    fontSize: 12,
  },
});
