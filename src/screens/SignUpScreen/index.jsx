import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import signUpScreenStyles from './style';
import InputWithIcon from '../../components/Input';
import TapButton from '../../components/Button';
import AlternativeSignUp from '../../components/AlternativeSignUp';
import DividerLine from '../../components/DividerLine';
import { signupUser } from '../../services/userService';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../contexts/userContext';


const backgroundImage = require('../../../assets/Images/viewSignUp.png');

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUserContext();


  const handleRegisterPress = async () => {
    try {
      if (!isChecked) {
        Alert.alert('Error', 'You must accept our Privacy Policy and Term of Use to register');
        return;
      }

      const newUser = { username, email, password };
      const response = await signupUser(newUser); 
      setUser(response.user);

      setUsername('');
      setEmail('');
      setPassword('');
      setChecked(false);
      navigation.navigate('Main-page');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleLogInPress = () => {
    navigation.navigate('Log-in');
  };

  const handleEmailChange = (text) => {
    setEmail(text.toLowerCase());
  };

  return (
    <View style={mainStyles.screenSettings}>
      <ImageBackground
        source={backgroundImage}
        style={signUpScreenStyles.backdroundView}
        resizeMode="cover" 
      />
      <View style={signUpScreenStyles.contentContainer}>
        <View style={[mainStyles.equalizer, signUpScreenStyles.placement]}>
          <View style={signUpScreenStyles.headerTextContainer}>
            <Text style={[mainStyles.intensiveMainText, signUpScreenStyles.intensiveMainText]}>Hey, there</Text>
            <Text style={[mainStyles.subHeaderText, signUpScreenStyles.subHeaderText]}>Create an Account</Text>
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
          <View style={signUpScreenStyles.checkboxContainer}>
            <Checkbox style={signUpScreenStyles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={[signUpScreenStyles.checkboxText, mainStyles.smallText]}>
              By continuing you accept our Privacy Policy and Term of Use
            </Text>
          </View>
          <TapButton onPress={handleRegisterPress} buttonText="Register"/>
          <DividerLine/>
          <AlternativeSignUp/>
          <View style={signUpScreenStyles.toLogInContainer}>
            <Text style={mainStyles.textDescription}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogInPress}>
              <Text style={signUpScreenStyles.clickableText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
