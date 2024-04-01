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

const SignupScreen = props => {
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
        XIN CHÀO!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT,
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 30,
        }}>
        Chào mừng bạn là thành viên mới của Smart Home nhóm 4
      </Text>
      <Foect.Form
        onValidSubmit={model => {
          Alert.alert('Xác nhận', JSON.stringify(model));
          navigation.navigate(SCREENS.CONFIRMEMAIL);
        }}>
        {form => (
          <View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              <Foect.Control
                name="first_name"
                required
                minLength={2}
                maxLength={32}>
                {control => (
                  <View style={{flex: 1, marginEnd: 5}}>
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
                      placeholder="Họ và Tên"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    {control.isInvalid && control.errors.required && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Vui lòng nhập Họ và tên
                      </Text>
                    )}
                    {control.isInvalid &&
                      !control.errors.required &&
                      control.errors.minLength && (
                        <Text
                          style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                          Kích thước quá ngắn, tối thiểu 2 ký tự
                        </Text>
                      )}
                    {control.isInvalid && control.errors.maxLength && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Kích thước quá dài, tối đa 24 ký tự
                      </Text>
                    )}
                  </View>
                )}
              </Foect.Control>
              
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
            <Foect.Control
              name="password"
              required
              pattern={
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              }>
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
                    placeholder="Mật khẩu"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Vui lòng nhập mật khẩu
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.pattern && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Mật khẩu phải chứa tối thiểu 8 ký tự, 
                        Ít nhất một chữ cái viết hoa, một chữ cái viết thường, 
                        số và một ký tự đặc biệt
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control
              name="confirm_password"
              required
              equalToControl="password">
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
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Vui lòng nhập lại mật khẩu
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.equalToControl && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Mật khẩu không khớp
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control 
            name="mobile" required pattern={/^[0-9]{10}/}>
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
                      placeholder="Số điện thoại"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    
                    {control.isInvalid && control.errors.required && (
                      <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Vui lòng nhập số điện thoại
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

              }}
              >
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
                  Đăng ký
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

export default SignupScreen;
