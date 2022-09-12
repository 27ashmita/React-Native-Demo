/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity
// } from 'react-native';

// const logo = require('./assets/Login/q.png');

// const App = () => {
//   return (
//     <SafeAreaView style={{backgroundColor: 'red'}}>
//       <View style={{backgroundColor: 'blue', flex: 1}}>
//         <Text>Hello</Text>
//         <View
//           style={{
//             width: 200,
//             height: 200,
//             alignSelf: 'center',
//             marginTop: -100,
//           }}>
//           <Image
//             source={logo}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               alignSelf: 'center',
//               width: 200,
//               height: 200,
//               borderRadius: 100,
//             }}
//           />
//           <TouchableOpacity
//             onPress={
//               console.log("click")
//             }
//             style={styles.uploadBtn}>
//             <Text>Upload Image</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   backgroundStyle: {
//     backgroundColor: 'red',
//   }
// });

// export default App;

// import React, { useState, useCallback } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { ImagePicker } from 'react-native-image-picker';

// import { ImagePickerHeader } from './src/components/ImagePickerHeader';
// import { ImagePickerModal } from './src/components/ImagePickerModal';
// import { ImagePickerAvatar } from './src/components/ImagePickerAvatar';

// const App = () => {
//   const [pickerResponse, setPickerResponse] = useState(null);
//   const [visible, setVisible] = useState(false);

//   const onImageLibraryPress = useCallback(() => {
//     const options = {
//       selectionLimit: 1,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     ImagePicker.launchImageLibrary(options, setPickerResponse);
//   }, []);

//   const onCameraPress = React.useCallback(() => {
//     const options = {
//       saveToPhotos: true,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     ImagePicker.launchCamera(options, setPickerResponse);
//   }, []);

//   const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

//   return (
//     <View style={styles.screen}>
//       <ImagePickerHeader />
//       <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
//       <ImagePickerModal
//         isVisible={visible}
//         onClose={() => setVisible(false)}
//         onImageLibraryPress={onImageLibraryPress}
//         onCameraPress={onCameraPress}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#f2f2fC',
//   },
// });

// export default App;

// import React, { Component } from 'react'
// import { View, StyleSheet } from 'react-native'
// import { WebView } from 'react-native-webview';

// const App = () => {
//    return (
//       <View style = {styles.container}>
//          <WebView
//          source = {{ uri:
//          'https://www.youtube.com/watch?v=qZVTkn2NjS0' }}
//          />
//       </View>
//    )
// }
// export default App;

// const styles = StyleSheet.create({
//    container: {
//       height: 350,
//    }
// })

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import AppButton from './src/components/Button';
// import { WebView } from 'react-native-webview';

// const logo = require('./assets/Login/icon_flag.png');

// const App = () => {
//   return (
//     <SafeAreaView style={styles.containerView}>
//       <Image
//         source={logo}
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: 10,
//           resizeMode: 'contain',
//           alignSelf: 'center',
//           marginTop: 54,
//         }}
//       />
//       <Text
//         style={{
//           color: 'white',
//           alignSelf: 'center',
//           fontSize: 20,
//           padding: 16,
//           marginTop: 12,
//         }}>
//         Golf in One にご登録いただき ありがとうございます！！
//       </Text>
//       <View style={{margin: 16}}>
//       <AppButton title="アプリの使い方の動画を見る" size="sm" backgroundColor="#FFE100" margin='10'/>
//       <View
//         style={{
//           backgroundColor: 'white',
//           borderRadius: 12,
//           height: 200,
//           marginTop: 12,
//           marginBottom: 12
//         }}>
//           <WebView
//          source = {{ uri:
//          'https://www.youtube.com/embed/qZVTkn2NjS0' }}
//          style = {{flex:1, borderRadius: 8}}
//          domStorageEnabled={true}
//          javaScriptEnabled={true}
//          />
//         </View>
//         <AppButton title="後で見る" size="sm" backgroundColor="white" margin='10'/>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   containerView: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
// });

// export default App;

// import React, {useState, useCallback} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {AppButton} from './src/components/Button';
// import * as ImagePicker from 'react-native-image-picker';

// import {ImagePickerHeader} from './src/components/ImagePickerHeader';
// import {ImagePickerModal} from './src/components/ImagePickerModal';
// import {ImagePickerAvatar} from './src/components/ImagePickerAvatar';

// const App = () => {
//   const [pickerResponse, setPickerResponse] = useState(null);
//   const [visible, setVisible] = useState(false);

//   const onImageLibraryPress = useCallback(() => {
//     const options = {
//       selectionLimit: 1,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     ImagePicker.launchImageLibrary(options, setPickerResponse);
//   }, []);

//   const onCameraPress = useCallback(() => {
//     const options = {
//       saveToPhotos: true,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     ImagePicker.launchCamera(options, setPickerResponse);
//   }, []);

//   const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

//   return (
//     <SafeAreaView style={styles.containerView}>
//       <View style={{flex: 1, backgroundColor: 'green'}}>
//         <Text
//           style={{
//             color: 'white',
//             marginTop: 54,
//             alignSelf: 'center',
//             fontSize: 20,
//           }}>
//           ようこそ Golf in One へ
//         </Text>
//         <View></View>
//       </View>
//       <View style={{
//           flex: 2,
//           backgroundColor: 'white',
//           borderRadius: 8,
//           margin: 8,
//           marginTop: -20,
//         }}>
//         {/* <ImagePickerHeader /> */}
//         <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
//         <ImagePickerModal
//           isVisible={visible}
//           onClose={() => setVisible(false)}
//           onImageLibraryPress={onImageLibraryPress}
//           onCameraPress={onCameraPress}
//         />
      
//       <View style={{marginTop: 10}}>
//         <TextInput
//           placeholder="ニックネーム"
//           autoCapitalize="none"
//           keyboardType="email-address"
//           autoCorrect={false}
//           wrapperStyles={styles.emailInput}
//           style={styles.textInput}
//         />
//         <Text
//           style={{
//             color: 'black',
//             alignSelf: 'center',
//             fontSize: 20,
//             padding: 16,
//           }}>
//           ※ ニックネームは後から変更できます ※ 4 〜 20文字以内
//         </Text>
//         <AppButton
//           title="設定する"
//           size="sm"
//           backgroundColor="#FFE100"
//           color="black"
//           style={{margin: 10}}
//         />
//       </View>
//       </View>
//       {/* </View> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   containerView: {
//     flex: 1,
//     backgroundColor: 'grey',
//   },
//   uploadBtnContainer: {
//     opacity: 0.7,
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'lightgrey',
//     width: '100%',
//     height: '25%',
//   },
//   uploadBtn: {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//     alignSelf: 'center',
//     height: 50,
//     borderRadius: 16,
//   },
//   textInput: {
//     alignItems: 'center',
//     padding: 16,
//     margin: 10,
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: 'white',
//     marginTop: 42,
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: '#f2f2fC',
//   },
// });

// export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/screens/Login';
import { Settings } from './src/components/screens/Settings';
import { Guide } from './src/components/screens/Guide';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Guide" component={Guide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
