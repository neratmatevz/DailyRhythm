import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import HomeHeaderBtn from "../Components/Common/HeaderBtn/HeaderBtn";
import Leaderboards from "../Components/Leaderboards/Leaderboards";


const Leaderboard = () => {
    const router = useRouter();
    const [data, setData] = useState([]);

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/left.png")}
                            dimension="80%"
                            rotation="180"
                            handlePress={() => router.push("/home")}
                        />
                    ),
                    headerTitle: "Leaderboard",
                }}

            />
            <Leaderboards></Leaderboards>
            
        </SafeAreaView>
    );
}

export default Leaderboard;