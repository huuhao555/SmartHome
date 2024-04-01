import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Image,
  Switch,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, FONTS} from '../../constants';
import IMAGES from '../../assets/images';
import SCREENS from '..';
import {AppContext} from '../../theme/AppContext';
import {useTheme} from '@react-navigation/native';

const LoginScreen = props => {
  const {navigation} = props;


  const {colors} = useTheme();

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      
      <Text
        style={{
          marginTop: 60,
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: 24,
          color: colors.text,
        }}>
        XIN CHÀO!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT,
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 50,
          color: colors.text,
        }}>
        Chào mừng bạn đến với Smart Home
      </Text>
      <Image source={IMAGES.LOGO} style={{width: 200, height: 200, marginLeft: 70, marginTop: 30}}/>
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 50,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Email"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Mật khẩu"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      
      <TouchableWithoutFeedback
          onPress={() => navigation.navigate(SCREENS.FORGOTPASS)}>
          <Text
            style={{
            // fontFamily: FONTS.MONTSERRAT,
            textAlign: 'right',
            marginTop: 20,
            marginStart: 5,
            fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
            // color: '#76D7C4',
            
            }}>
            Quên mật khẩu?
          </Text>
        </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(SCREENS.CONFIRMLOGIN);
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.MAIN,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <Text
            style={{
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: COLORS.WHITE,
              fontSize: 16,
            }}>
            Đăng nhập
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {/* <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.5, height: 2, backgroundColor: COLORS.GRAY_LIGHT}}
        />
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontFamily: FONTS.MONTSERRAT,
            color: colors.text,
          }}>
          Hoặc tiếp tục với 
        </Text>
        <View
          style={{flex: 0.5, height: 2, backgroundColor: COLORS.GRAY_LIGHT}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 50,
        }}>
        <View
          style={{
            height: 70,
            width: 100,
            borderWidth: 3,
            borderRadius: 10,
            borderColor: COLORS.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={IMAGES.GOOGLE} style={{height: 40, width: 40}} />
        </View>
        <View
          style={{
            height: 70,
            width: 100,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: COLORS.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={IMAGES.APPLE} style={{height: 40, width: 40}} />
        </View>
        <View
          style={{
            height: 70,
            width: 100,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: COLORS.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={IMAGES.FACEBOOK} style={{height: 40, width: 40}} />
        </View>
      </View> */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT_MEDIUM, color: colors.text}}>
          Chưa có tài khoản?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: '#76D7C4',
            }}>
            Đăng ký tại đây
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;