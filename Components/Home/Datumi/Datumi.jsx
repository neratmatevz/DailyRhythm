import React, { useState } from 'react';
import { 
SafeAreaView, 
View, 
Text, 
TouchableOpacity, 
} from 'react-native';
import Aktivnosti from '../Aktivnosti/Aktivnosti';
import styles from './HomeDatumi.style';
import moment from 'moment';


function Datumi() {
    const today = moment();
    const [selectedDate, setSelectedDate] = useState(today.format('LL'));
    const [selectedweekday, setselectedweekday] = useState(today.format('ddd'));
    const datumi = [
        { weekday: today.format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
        { weekday: today.add(1, 'day').format('ddd'), date: today.format('DD'), dayDate: today.format('LL') },
    ];

    const handleDateClick = (dayDate, weekday) => {
        
        setSelectedDate(dayDate);
        setselectedweekday(weekday);

    };

    return (
        <View>
            
            <View style={styles.container}>
                {datumi.map((item, dateIndex) => {
                    return (
                        <TouchableOpacity
                            key={dateIndex}
                            style={styles.picker}
                            onPress={() => handleDateClick(item.dayDate, item.weekday)}
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

            <Aktivnosti selectedDate={selectedDate} selectedweekday={selectedweekday} />
        </View>

    );
}



export default Datumi;
