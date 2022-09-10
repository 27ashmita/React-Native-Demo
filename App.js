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
//   Text
// } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={{backgroundColor: 'red'}}>
//       <View style={{backgroundColor: 'blue', flex: 1, alig}}>
//         <Text>Hello</Text>
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
// import LinearGradient from 'react-native-linear-gradient';
import AppButton from './src/components/Button';
import {
  FacebookSocialButton,
  AppleSocialButton,
  TwitterSocialButton,
} from 'react-native-social-buttons';

const logo = require('./assets/Login/icon_flag.png');

const App = () => {
  return (
    <SafeAreaView style={styles.containerView}>
      <Image
        source={logo}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: 54,
        }}
      />
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          fontSize: 20,
          padding: 16,
          marginTop: 12,
        }}>
        Golf in One にご登録いただき ありがとうございます！！
      </Text>
      <View style={{margin: 16}}>
      <AppButton title="アプリの使い方の動画を見る" size="sm" backgroundColor="#FFE100" margin='10'/>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          height: 200,
          marginTop: 12,
          marginBottom: 12
        }}></View>
        <AppButton title="後で見る" size="sm" backgroundColor="white" margin='10'/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
