import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import db from "../Database/db";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
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
            <Text>Data from the database:</Text>
            {data.map((item) => (               
                <Text key={item.id}>{item.id}</Text>
            ))}
        </SafeAreaView>
    );
}


export default Home;