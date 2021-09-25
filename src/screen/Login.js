import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import Logo from '../assets/images/Octocat.png';
const {width: WIDTH} = Dimensions.get('window');
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      Username: '',
      Password: '',
      Email: '',
      userInformation : ""
      // display: 'Signup'
    };
  }

  componentWillMount = () => {
    GoogleSignin.configure();
  };

  validateFields() {
    var username = this.state.Username;
    var password = this.state.Password;
    var email = this.state.Email;

    let alph = /^[A-Za-z]+$/;
    let malph = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (username !== null && password !== null && email !== null) {
      if (username.length > 5 && alph.test(username)) {
        if (malph.test(email)) {
          if (password.length > 3 && alph.test(password)) {
            // this.props.navigation.navigate('Welcome');
            console.log('success');
            alert("")
          } else {
            alert('Enter the valid password');
          }
        } else {
          alert('Enter the valid email-id');
        }
      } else {
        alert('Enter the valid username');
      }
    } else {
      alert('please fill the required fields');
    }
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
     let userInfo = await GoogleSignin.signIn();
     alert("Welcome  " +  userInfo.user.name);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View style={styles.inputFormContainer}>
          {/* <Image source={usericon} style={styles.iconStyle} /> */}

          <TextInput
            placeholder="Username"
            onChangeText={(username) => this.setState({Username: username})}
            returnKeyType="next"
            placeholderTextColor="white"
            fontColor="white"
            placeholderTextSize="50"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFormContainer}>
          {/* <Image source={emailicon} style={styles.iconStyle} /> */}

          <TextInput
            placeholder="Email"
            onChangeText={(email) => this.setState({Email: email})}
            returnKeyType="next"
            placeholderTextColor="white"
            placeholderTextSize="50"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFormContainer}>
          {/* <Image source={pwdicon} style={styles.iconStyle} /> */}

          <TextInput
            placeholder="Password"
            onChangeText={(password) => this.setState({Password: password})}
            placeholderTextColor="white"
            placeholderTextSize="50"
            returnKeyType="go"
            secureTextEntry
            underlineColorAndroid={'transparent'}
            style={styles.inputField}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.validateFields()}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          style={styles.googleButtonStyles}
        />
      </View>
    );
  }
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  logoContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  inputFormContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginRight: 20,
  },
  inputField: {
    width: WIDTH - 85,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#FEFEFE',
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
  inputuseremail: {
    width: WIDTH - 85,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#FEFEFE',
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
  inputpassword: {
    height: 60,
    width: WIDTH - 85,
    borderBottomColor: '#FEFEFE',
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
  datepick: {
    height: 50,
    width: WIDTH - 85,
    paddingHorizontal: 30,
    borderBottomColor: '#FEFEFE',
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#FEFEFE',
    paddingVertical: 10,
    fontWeight: '700',
    marginTop: 35,
    borderRadius: 30,
    width: 250,
    alignSelf: 'center',
  },
  submitbuttonicon: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 35,
    height: 35,
  },
  button: {
    flex: 0.2,
    // backgroundColor: '#E2112E',
  },
  submitText: {
    textAlign: 'center',
  },
  googleButtonStyles: {
    width: 192,
    height: 48,
    alignSelf: 'center',
  },
});
