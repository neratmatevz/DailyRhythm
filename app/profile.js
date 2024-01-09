import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import HomeHeaderBtn from '../Components/Common/HeaderBtn/HeaderBtn';

const Profile = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: 'Profile',
                    headerTitleAlign: 'center',
                    headerLeft: () =>{
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/left.png")}
                            handlePress={() => router.back()}
                        />
                    }
                }}
            />
            <Text>PROFIL</Text>
        </SafeAreaView>
    )
}

export default Profile;