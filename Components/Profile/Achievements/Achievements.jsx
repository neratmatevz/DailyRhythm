import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";


const Achievements = () => {
    return(
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>34 new matches</Text>
                <TouchableOpacity  style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionBody}>
                <ScrollView horizontal contentContainerStyle={styles.sectionScroll}>
                    {matches.map(({avatar, id, name, age}) => (
                        <View style={styles.sectionCard} key={id}>
                            <Image style={styles.sectionImage} source={{ uri: avatar }} />
                            <View style={styles.sectionInfo}>
                                <Text style={styles.sectionLabel}>{name}</Text>
                                <Text style={styles.sectionLabel}>Age: {age}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}