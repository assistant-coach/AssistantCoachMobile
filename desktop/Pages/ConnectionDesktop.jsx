import {StyleSheet, Text, View} from "react-native";
import NavDesktop from '../inc/NavDesktop';
export function ConnectionDesktop({navigation,route}) {
    return (
        <View style={styles.container}>
            <Text >Connection Page (desktop)</Text>
            <NavDesktop navigation={navigation}></NavDesktop>
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