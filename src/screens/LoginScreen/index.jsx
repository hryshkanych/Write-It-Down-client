import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import loginScreenStyles from './style';
import InputWithIcon from '../../components/Input';
import TapButton from '../../components/Button';
import AlternativeLogin from '../../components/AlternativeLogin';
import DividerLine from '../../components/DividerLine';

const backgroundImage = require('../../../assets/Images/viewLogin.png');

const LoginScreen = () => {
  const [isChecked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {

  }

  return (
    <View style={mainStyles.screenSettings}>
      <ImageBackground
        source={backgroundImage}
        style={loginScreenStyles.backdroundView}
        resizeMode="cover" 
      />
      <View style={loginScreenStyles.contentContainer}>
        <View style={[mainStyles.equalizer, loginScreenStyles.placement]}>
          <View style={loginScreenStyles.headerTextContainer}>
            <Text style={[mainStyles.intensiveMainText, loginScreenStyles.intensiveMainText]}>Hey, there</Text>
            <Text style={[mainStyles.subHeaderText, loginScreenStyles.subHeaderText]}>Create an Account</Text>
          </View>
          <InputWithIcon
            iconName="user"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            iconSize={20}
          />
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
          <View style={loginScreenStyles.checkboxContainer}>
            <Checkbox style={loginScreenStyles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={loginScreenStyles.checkboxText}>
              By continuing you accept our Privacy Policy and Term of Use
            </Text>
          </View>
          <TapButton onPress={handleRegisterPress} buttonText="Register" />
          <DividerLine/>
          <AlternativeLogin/>
          <View style={loginScreenStyles.toLoginContainer}>
            <Text>Already have an account?</Text>
            <Text style={loginScreenStyles.LoginText}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
