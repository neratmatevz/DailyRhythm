import { Image, TouchableOpacity } from 'react-native';
import styles from './LogoTitle.style';

const LogoTitle = () => {
    return (

        <Image
            source={require('../../../Assets/Logo/logo.png')}
            style={styles.logo}
            resizeMode='contain'
        />
    );
}

export default LogoTitle;