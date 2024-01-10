import React, { useState } from 'react';
import { 
SafeAreaView, 
View, 
Text, 
TouchableOpacity, 
} from 'react-native';
import Aktivnosti from '../Aktivnosti/Aktivnosti';
import styles from './HomeDatumiStyle';
import moment from 'moment';


function Datumi() {
    const today = moment();
    const [selectedDate, setSelectedDate] = useState(today.format('LL'));
    const datumi = [
        { weekday: today.format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
    ];

    const handleDateClick = (dayDate) => {
        
        setSelectedDate(dayDate);

    };

    return (
        <View>
            <View style={styles.container}>
                {datumi.map((item, dateIndex) => {
                    return (
                        <TouchableOpacity
                            key={dateIndex}
                            style={styles.picker}
                            onPress={() => handleDateClick(item.dayDate)}
                        >
                            <View style={styles.itemRow}>
                                <View>
                                    <Text style={styles.weekday}>{item.weekday}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}

            </View>

            <Aktivnosti selectedDate={selectedDate} />
        </View>

    );
}



export default Datumi;
