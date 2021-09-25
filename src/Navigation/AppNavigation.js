import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../screen/Login"
const Navigation = createStackNavigator({
    Login : {screen : Login},
},
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
)
const Appcontainer = createAppContainer(Navigation)
export default Appcontainer;