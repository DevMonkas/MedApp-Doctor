import * as React from 'react';
import PrimaryInput from '../../components/atoms/PrimaryInput/PrimaryInput';
import PrimaryButton from '../../components/atoms/PrimaryButton/PrimaryButton';
import {
  Linking,
  StyleSheet,
  ViewStyle,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {call, LoginIcon} from '../../../assets/index.js';
import CustomCarousel from '../../components/Molecules/Carousel/CustomCarousel';
import {carouselDummy} from '../../shared/Data';
import TrendingCard from '../../components/Molecules/TrendingCard/TrendingCard';
import CategoryTab from '../../components/atoms/CategoryTab/CategoryTab';
import CategoryTabList from '../../components/Molecules/CategoryTabList/CategoryTabList';
import FeatureCard from '../../components/Molecules/FeatureCard/FeatureCard';
import {COLORS, SIZES} from '../../constants/theme';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {getIdTokenRefreshed} from '../../utils/Utility';
import {checkAuth} from '../../services/User.service';
const callingImg = require('../../../assets/calling.png');
const chattingImg = require('../../../assets/chat.png');
const videoImg = require('../../../assets/video-calling.png');
const shoppingImg = require('../../../assets/shopping-cart.png');
import auth from '@react-native-firebase/auth';
export default function Home({navigation}: any) {
  React.useEffect(() => {}, []);
  return (
    <>
      {/* <Center
        safeArea
        flex={1}
        justifyContent="ce"
        p={2}
        w="100%"
        mx="auto"
      > */}
      <View
        style={{
          paddingTop: 0.13 * SIZES.height,
          backgroundColor: 'white',
        }}>
        <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
          <CategoryTabList />
          <CustomCarousel data={carouselDummy} loop={true} autoplay={true} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  trendingCardWrapper: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingVertical: 8,
    marginTop: 12,
    width: '100%',
  },
  featureCardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 0,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  heading: {
    marginTop: '3%',
    marginLeft: '3%',
    color: 'black',
    fontSize: 20,
  },
});
