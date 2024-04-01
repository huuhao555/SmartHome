import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { onChangeText } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes'

const AddScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={{fontSize: 20}}>  </Text>
        <TextInput 
          placeholder='Nhập email người dùng'
          onChangeText={onChangeText}
          style={{
            width: '70%',
            height: 30,
            borderColor: '#000',
            borderWidth: 1,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default AddScreen