import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard
} from 'react-native';
import {Button, TextInput} from '../../components';
import {useFormik} from 'formik';
import {loginValidationSchema} from '../../validation';

const logo = require('../../../assets/Login/GIO-logo-green.png');
interface LoginInput {
  email: string;
  password: string;
}

const Register = ({ navigation }) => {
  const formik = useFormik<LoginInput>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      console.log('login pressed');
      alert(JSON.stringify(values, null, 2));
      Keyboard.dismiss();
    },
  });
  return (
    <SafeAreaView style={styles.containerView}>
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={logo}
            style={{
              height: 110,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              resizeMode: 'center',
            }}
          />
        </View>
        <TextInput
          placeholder="Email"
          value={formik.values.email}
          onChangeText={(text: string) => {
            formik.setFieldValue("email", text);
          }}
          error={formik.errors.email}
        />
        <TextInput
          value={formik.values.password}
          onChangeText={(text: string) => {
            formik.setFieldValue("password", text);
          }}
          error={formik.errors.password}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.screenContainer}>
          <Button onPress={formik.submitForm} title="Login" />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              marginTop: 12,
            }}
            onPress={() => navigation.navigate('Settings')}
            >
            <Text style={{color: 'white'}}>Golf in One会員規約に同意する</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomView}>
          <Text>既にアカウントをお持ちの方はログイン</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'green',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: 'red',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  textInput: {
    alignItems: 'center',
    padding: 16,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  screenContainer: {
    justifyContent: 'center',
    padding: 10,
  },
  buttonViewStyle: {
    justifyContent: 'center',
    margin: 10,
    width: '95%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 25,
  },
  logoStyle: {},
  textStyle: {},
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    marginBottom: 83,
    marginTop: 100,
  },
});

export default Register;