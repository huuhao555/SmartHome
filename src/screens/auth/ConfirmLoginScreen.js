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

const ConfirmLoginScreen = props => {
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
        XÁC NHẬN TÀI KHOẢN
      </Text>
      
      <Foect.Form
        onValidSubmit={model => {
          Alert.alert('Payload', JSON.stringify(model));
        }}>
        {form => (
          <View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
      
              
            </View>

            
            <Foect.Control 
            name="mobile" required pattern={/^[0-9]{10}/}>
                {control => (
                  <View>
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
                      placeholder="Mã xác nhận"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    
                    {control.isInvalid && control.errors.required && (
                      <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Vui lòng nhập mã xác nhận
                      </Text>
                    )}
                    {control.isInvalid && control.errors.pattern && (
                      <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Mã xác nhận không hợp lệ
                      </Text>
                    )}
                  </View>
                )}
              </Foect.Control>

            <TouchableWithoutFeedback onPress={() => {
                     navigation.navigate(SCREENS.HOME);
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
                  Xác nhận
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Foect.Form>
      
    </SafeAreaView>
  );
};

export default ConfirmLoginScreen;
