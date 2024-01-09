import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import db from "../Assets/Database/db";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import HomeHeaderBtn from "../Components/Common/HeaderBtn/HeaderBtn";

const Home = () => {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Example query to fetch data from the database
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM aktivnost;',
                [],
                (_, result) => {
                    setData(result.rows._array);
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });
    }, []);

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <HomeHeaderBtn
                            icon={require("../Assets/Icons/menu.png")}
                            dimension="60%"
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
                <Text>Data from the database:</Text>
                {data.map((item) => (
                    <Text key={item.id}>{item.id}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;