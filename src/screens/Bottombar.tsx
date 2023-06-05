import React from "react";

//SCREENS
import { SCREENS } from ".";

//COMPONENTS
import { Tabbar } from "../components";

//PACKAGES
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomBar() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={SCREENS.Home.name}
                tabBar={props => {
                    return <Tabbar {...props} />;
                }} >
                <Tab.Screen name={SCREENS.Home.name} component={SCREENS.Home.component} />
                <Tab.Screen name={SCREENS.Courses.name} component={SCREENS.Courses.component} />
                <Tab.Screen name={SCREENS.Leaderboard.name} component={SCREENS.Leaderboard.component} />
                <Tab.Screen name={SCREENS.Community.name} component={SCREENS.Community.component} />
                <Tab.Screen name={SCREENS.Profile.name} component={SCREENS.Profile.component} />
            </Tab.Navigator>
        </>
    )
}

export default BottomBar