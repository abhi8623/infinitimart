const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthSignIn1 from "./screens/AuthSignIn1";
import AuthSignIn from "./screens/AuthSignIn";
import Property1DefaultIcon from "./components/Property1DefaultIcon";
import NoOfOptions5SelectedOpt from "./components/NoOfOptions5SelectedOpt";
import Property1OnClick from "./components/Property1OnClick";
import AvatarSizeLargeImage from "./components/AvatarSizeLargeImage";
import TitlePage from "./components/TitlePage";
import Property1OnClick1 from "./components/Property1OnClick1";
import Property1Default from "./components/Property1Default";
import ButtonPrimary from "./components/ButtonPrimary";
import IconleftActivefalse from "./components/IconleftActivefalse";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import SignIn2 from "./screens/SignIn2";
import Alerts from "./screens/Alerts";
import Alerts1 from "./screens/Alerts1";
import HomePage from "./screens/HomePage";
import Inbox from "./screens/Inbox";
import Frame7 from "./screens/Frame7";
import Frame from "./components/Frame";
import Frame1 from "./screens/Frame1";
import Frame2 from "./components/Frame2";
import AuthSignUp from "./screens/AuthSignUp";
import OTPVerificationSuccessful from "./components/OTPVerificationSuccessful";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AuthSignIn1"
              component={AuthSignIn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthSignIn"
              component={AuthSignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn2"
              component={SignIn2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Alerts"
              component={Alerts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Alerts1"
              component={Alerts1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inbox"
              component={Inbox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AuthSignUp"
              component={AuthSignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
