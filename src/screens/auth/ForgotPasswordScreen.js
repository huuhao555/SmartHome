import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';
import Foect from 'foect';
import {Alert} from 'react-native';
import SCREENS from '..';

const ForgotPasswordScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      <Text
        style={{
          marginTop: 60,
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: 24,
        }}>
        Lấy lại mật khẩu
      </Text>
      
      <Foect.Form
        onValidSubmit={model => {
          Alert.alert('Mật khẩu mới đã được gửi về Email của bạn');
          navigation.navigate(SCREENS.LOGIN)
        }}>
        {form => (
          <View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              
              
            </View>
            <Foect.Control name="email" required email>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Email"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Vui lòng nhập Email
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.email && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Email không hợp lệ
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            
            <TouchableWithoutFeedback 
            onPress={() => {
              if (form.isValid) { // Check if the form is valid
                form.submit(); // Submit the form if valid
              } else {
                Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
              }

            }}>
              <View
                style={{
                  height: 50,
                  backgroundColor: COLORS.MAIN,
                  marginTop: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
                    color: COLORS.WHITE,
                    fontSize: 16,
                  }}>
                  Lấy mật khẩu
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Foect.Form>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT_MEDIUM}}>
          Bạn đã có tài khoản?
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: '#76D7C4',
            }}>
            Đăng nhập
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
