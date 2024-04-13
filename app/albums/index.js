// import { View, Text, SafeAreaView, StyleSheet, ScrollView, Pressable } from 'react-native'

// import React, {useState, useEffect} from React;

// const Albums = () => {
//   const [albums,setAlbums] = useState ([]);

//   useEffect (() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () =>{
//     const res = await fetch  (`https://jsonplaceholder.typicode.com/albums`)
//     const data = await res.json();
//     setAlbums(data);

//   };
  
//   return (
//     <SafeAreaView style={style.container}>
//       <ScrollView contentContainerStyle= {style.scrollBox}>
//         <Pressable>
//           <Text></Text>
//         </Pressable>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default Albums

// const style = StyleSheet.create ({
//   container: {
//     flex: 1,
//     background : "blue"
//   },
//   scrollBox: {
//     flex: 1,
//     bbackground : "blue"

//   }
// })