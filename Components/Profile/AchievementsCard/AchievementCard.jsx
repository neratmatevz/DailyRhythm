import { Image, Text, View } from "react-native";

import styles from "./AchievementCard.style";
import { useEffect, useState } from "react";

const AchievementCard = ({ item }) => {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (item.datumOsvojitve !== null){
            setCompleted(true);
        }
    }, []);

    return(
        <View style={styles.sectionCard} key={item.id}>
            <View style={styles.sectionInfo}>
                {
                completed ? 
                    <Image style={styles.sectionImage} source={require("../../../Assets/Icons/achievement.png")} /> 
                :   <Image style={styles.sectionImage} source={require("../../../Assets/Icons/uncompletedAchievement.png")} />
                }
                
                <Text style={styles.sectionTitle}>{item.naziv}</Text>
                <Text style={styles.sectionLabel}>{item.opis}</Text>
            </View>
        </View>
    )
}

export default AchievementCard;