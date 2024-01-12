import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import styles from "./Achievements.style";
import { FlatList } from "react-native-gesture-handler";
import AchievementCard from "../AchievementsCard/AchievementCard";

import db from "../../../Assets/Database/db";


const Achievements = () => {
    const [achievements, setAchievements] = useState(initialAchievements)

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM dosezek',
                [],
                (_, result) => {
                    const achievements = result.rows._array;

                    if(achievements !== undefined){
                        setAchievements(achievements);
                    }else{
                        console.error("Achievements undefined");
                    }
                },
                (_, error) => {
                    console.error('Error fetching data:', error);
                }
            );
        });
    }, []);

    return(
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Achievements:</Text>
            </View>
            <View style={styles.sectionBody}>
                <FlatList 
                    data={achievements}
                    renderItem={({item}) => (
                        <AchievementCard
                            item={item}
                        />
                        
                    )}
                    keyExtractor={item => item?.id}
                    horizontal
                />
                
            </View>
        </View>
    )
};

const initialAchievements = [
    {
        id: 1,
        naziv: "SOMETHING WRONG",
        opis: "SOMETHING IS WRONG",
        datumOsvojitve: "00.00.0000"
    }
]

export default Achievements;