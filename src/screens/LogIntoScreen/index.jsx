import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import logInStyles from './style';
import InputWithIcon from '../../components/Input';
import TapButton from '../../components/Button';
import AlternativeSignUp from '../../components/AlternativeSignUp';
import DividerLine from '../../components/DividerLine';

const backgroundImage = require('../../../assets/Images/viewLogin.png');

const LogInScreen = () => {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogInPress = () => {

  }

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
            onChangeText={setEmail}
            iconSize={18}
          />
          <InputWithIcon
            iconName="lock"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconSize={22}
          />
          <View style={logInStyles.forgotPassContainer}>
            <Text style={logInStyles.clickableText}>Forgot your password?</Text>
          </View>
          <TapButton onPress={handleLogInPress} buttonText="Log in"/>
          <DividerLine/>
          <AlternativeSignUp/>
          <View style={logInStyles.toSignUpContainer}>
            <Text style={mainStyles.textDescription}>Don’t have an account yet?</Text>
            <Text style={logInStyles.clickableText}>Register</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogInScreen;
