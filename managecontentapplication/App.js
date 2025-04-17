import React from 'react';
// import {View,Text, StyleSheet} from 'react-native';
import Hello from './src/componenets/Hello';
import {Provider} from 'react-redux';
import {store} from './src/store';

export default function App ()  {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Bonjour React</Text>
    // </View>

    // <View style={styles.container}>
    //     <Hello/>
    // </View>

    <Provider store={store}>
        <Hello/>
    </Provider>
  )

}

// const styles = StyleSheet.create({
//     container : {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#f5f5f5'
//     },
//     text : {
//         color:'#333',
//         fontSize: 24,
//         fontWeight:'bold',
//     }
// });