import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const postid = () => {
const {postid} = useLocalSearchParams ();



  return (
    <View>
      <Text>Post # {postid}</Text>
    </View>
  )
}

export default postid