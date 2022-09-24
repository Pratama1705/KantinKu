import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Menu, Profile, DetailProduk, Keranjang, EditProfile, ChangePassword, HistoryPemesanan } from '../pages';
import { BottomNavigator } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="DetailProduk" component={DetailProduk} options={{ headerShown: false }} />
            <Stack.Screen name="Keranjang" component={Keranjang} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{title: "Edit Profile"}}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title: "Change Password"}}/>
            <Stack.Screen name="HistoryPemesanan" component={HistoryPemesanan} options={{title: "History Pemesanan"}}/>
        </Stack.Navigator>
    )
}

export default Router