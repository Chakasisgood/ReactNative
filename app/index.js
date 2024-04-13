import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, TouchableHighlight, Image } from 'react-native';
// import hello from "..assets/hello.jpg"
import { Button } from 'react-native-web';
import { Link } from 'expo-router';
// import { router } from 'expo-router';

export default function App() {
  
// const router = useRouter ();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");



  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innerBox}>
            
            <TouchableHighlight onPress={() => console.log("Hello")}>
            <Text style={styles.title}> Vincent The Great White Sharks </Text>
            </TouchableHighlight>
            
            <TextInput placeholder='Enter Username' style={styles.input} value={username} onChangeText={setUsername}/>
            <TextInput placeholder='Enter Password' style={styles.input} value={password} onChangeText={setPassword} secureTextEntry/>



                    <Text style={styles.title}>username: {username}</Text>
                    <Text style={styles.title}>password: {password}</Text>

            <Button
                title = "login"
                onPress= {() => console.log("hello")}
                color = {'green'}
            />
            <Pressable>
                <Text style={styles.button} onPress={
                    ()=> console.log("Register")
                }>

                    Register
                </Text>
            </Pressable>


            {/* <Image
            style={{ width:100, height: 100}}
            source = {hello}
            />   */}


            <Image
            style={{ width:100, height: 100, margin: 10}}
                source = {{
                    uri: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                }}
            />  
            <Image
            style={{ width:100, height: 100, margin: 10}}
                source = {{
                    uri: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                }}
            />  

            <Link href="/home" style={{ color: "white", fontSize: 30, margin: 10}}>Home</Link>
            <Link href="/about" style={{ color: "white", fontSize: 30}}>About</Link>
            <Link href="/users" style={{ color: "white", fontSize: 30}}>Users</Link>


            <Link href="/post" style={{ color: "white", fontSize: 30}}>View Posts</Link>
            <Link href="/post/102" style={{ color: "white", fontSize: 30}}>View Single Posts</Link>
            <Link href="/albums" style={{ color: "white", fontSize: 30}}>View Albums</Link>
           

        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#727bcf',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  innerBox:{
    fontSize: '20px',
    color:'#fff',
    backgroundColor: '#333336',
    width: '100%',
    height:'auto',

  },
  title :{
    margin:'5px',
    color: 'pink',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input:{
    margin: 8,
    padding: 6,
    height: 40,
    width: "100%",
    border: "1px solid red",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  button:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    margin: 2,
    fontSize: 20,

  },


//   OutboxBox:{
//     margin: '10px',
//     fontSize: '25px',
//     color:'black',
//     backgroundColor: '#571342',
//     width: '100%',
//     height:'auto',

//   },
});
