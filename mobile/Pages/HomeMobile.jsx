import {StyleSheet, Text, View} from "react-native";
import NavMobile from "../inc/NavMobile";

export function HomeMobile({navigation,route}) {
    return (
        <View style={styles.container}>
            <Text>Home Page (mobile)</Text>
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