import React from 'react'
import { Stack } from 'expo-router';


const _layout = () => {
  return (
    <Stack initialRouteName='index'>
        <Stack.Screen name="/" />
        <Stack.Screen name="/home" />
        <Stack.Screen name="/about" />
        <Stack.Screen name="/users" />
        <Stack.Screen name="/post" />
        <Stack.Screen name="/posts/postid" />
        <Stack.Screen name="/albums" />
        <Stack.Screen name="/albums/[albumid]"/>
    </Stack>
  )
}

export default _layout