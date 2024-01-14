import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import db from "../Assets/Database/db";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import HomeHeaderBtn from "../Components/Common/HeaderBtn/HeaderBtn";
import Datumi from "../Components/Home/Datumi/Datumi";


const Home = () => {
    const router = useRouter();
    const [data, setData] = useState([]);

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
                            icon={require("../Assets/Icons/person.png")}
                            dimension="80%"
                            handlePress={() => router.push("/profile")}
                        />
                    ),
                    headerTitle: "Your week",
                    headerTitleAlign: 'center',
                }}

            />
            <ScrollView>
                <Datumi></Datumi>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;