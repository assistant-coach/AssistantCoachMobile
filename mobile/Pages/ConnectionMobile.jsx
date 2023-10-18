import {StyleSheet, Text, View} from "react-native";
import NavMobile from '../inc/NavMobile';
export function ConnectionMobile({navigation,route}) {
    return (
        <View style={styles.container}>
            <Text >Connection Page (desktop)</Text>
            <NavMobile navigation={navigation}></NavMobile>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#606060',

    },
});