import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import HomeHeaderBtn from "../Components/Common/HeaderBtn/HeaderBtn";
import Datumi from "../Components/Home/Datumi/Datumi";
import LogoTitle from "../Components/Home/LogoTitle/LogoTitle";


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/menu.png")}
                            dimension="60%"
                            handlePress={() => router.push("/leaderboard")}
                        />
                    ),                    
                    headerRight: () => (
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/person1.png")}
                            dimension="100%"
                            handlePress={() => router.push("/profile")}
                        />
                    ),
                    headerTitle: () => {return(<Image
                        source={require('../Assets/Logo/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />)},
                    headerTitleAlign: 'center',
                    
                }}
            />

            <ScrollView>
                <Datumi></Datumi>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 30,
    }
});

export default Home;