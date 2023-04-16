import { ScrollView, View } from 'react-native'
import React from 'react'

const FormLayout = ({ children }) => {
  return (
    <View className="bg-white px-6 py-10 w-full rounded-t-3xl">
        <ScrollView>{children}</ScrollView>
    </View>
  )
}

export default FormLayout