import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";

import styles from "./Achievements.style";
import { FlatList } from "react-native-gesture-handler";
import AchievementCard from "../AchievementsCard/AchievementCard";

import db from "../../../Assets/Database/db";


const Achievements = () => {
    const [achievements, setAchievements] = useState(initialAchievements);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM dosezek',
                [],
                (_, result) => {
                    const achievements = result.rows._array;

                    if (achievements !== undefined) {
                        setAchievements(achievements);
                        setLoading(false);
                    } else {
                        console.error("Achievements undefined");
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });
    }, []);

    return (

        <View style={styles.section}>
            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Achievements:</Text>
                    </View>
                    <View style={styles.sectionBody}>
                        <FlatList
                            data={achievements}
                            renderItem={({ item }) => (
                                <AchievementCard
                                    item={item}
                                />

                            )}
                            keyExtractor={item => item?.id}
                            horizontal
                        />

                    </View>
                </>
            )}

        </View>
    )
};

const initialAchievements = [
    {
        id: 1,
        naziv: "",
        opis: "",
        datumOsvojitve: null
    }
]

export default Achievements;