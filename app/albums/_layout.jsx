import React from 'react'
import { Stack } from 'expo-router';


const Layout = () => {
  return (
    <Stack initialRouteName='index'>
        <Stack.Screen name="/" />
        <Stack.Screen name="/[albumid]" />
        
    </Stack>
  )
}

export default Layout