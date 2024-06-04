import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import logInStyles from './style';
import InputWithIcon from '../../components/Input';
import TapButton from '../../components/Button';
import AlternativeSignUp from '../../components/AlternativeSignUp';
import DividerLine from '../../components/DividerLine';
import { loginUser } from '../../services/userService'; 
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../contexts/userContext';

const backgroundImage = require('../../../assets/Images/viewLogin.png');

const LogInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUserContext();

  const handleLogInPress = async () => {
    try {
      const newUser = { email, password };
      const response = await loginUser(newUser); 
      console.log(JSON.stringify(response.user));
      setUser(response.user);
      console.log('from user context', user);
      navigation.navigate('Main-page');
      // Alert.alert('Success', response.message);
      
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('Sign-up');
  };

  const handleEmailChange = (text) => {
    setEmail(text.toLowerCase());
  };

  return (
    <View style={mainStyles.screenSettings}>
      <ImageBackground
        source={backgroundImage}
        style={logInStyles.backdroundView}
        resizeMode="cover" 
      />
      <View style={logInStyles.contentContainer}>
        <View style={[mainStyles.equalizer, logInStyles.placement]}>
          <View style={logInStyles.headerTextContainer}>
            <Text style={[mainStyles.intensiveMainText, logInStyles.intensiveMainText]}>Hey, there</Text>
            <Text style={[mainStyles.subHeaderText, logInStyles.subHeaderText]}>Welcome Back</Text>
          </View>
          <InputWithIcon
            iconName="envelope"
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            iconSize={18}
          />
          <InputWithIcon
            iconName="lock"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconSize={22}
            secureTextEntry={true}
          />
          <View style={logInStyles.forgotPassContainer}>
            <Text style={logInStyles.clickableText}>Forgot your password?</Text>
          </View>
          <TapButton onPress={handleLogInPress} buttonText="Log in"/>
          <DividerLine/>
          <AlternativeSignUp/>
          <View style={logInStyles.toSignUpContainer}>
            <Text style={mainStyles.textDescription}>Don’t have an account yet?</Text>
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text style={logInStyles.clickableText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;
