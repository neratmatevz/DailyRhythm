import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import HomeHeaderBtn from "../Components/Common/HeaderBtn/HeaderBtn";
import Leaderboards from "../Components/Leaderboards/Leaderboards";
import { FlatList } from "react-native-gesture-handler";

const Leaderboard = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => <View />,
                    headerTitle: "Leaderboard",
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/right.png")}
                            dimension="80%"
                            handlePress={() => router.push("/home")}
                        />
                    ),
                }}
            />
        
            <Leaderboards />
        </SafeAreaView>
    );

}



export default Leaderboard;
