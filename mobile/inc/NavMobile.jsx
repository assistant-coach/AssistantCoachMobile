import {StyleSheet, Pressable, Text, View} from 'react-native';


export default function NavMobile({navigation}) {



    return (
        <View style={{flexDirection:'row',marginTop:20}}>
            <Pressable
                onPress={()=>{navigation.navigate('Home');}}
            ><Text style={styles.textMenu}>Home</Text></Pressable>

            <Pressable
                onPress={()=>{navigation.navigate('Connection');}}
            ><Text style={styles.textMenu}>Connection</Text></Pressable>

        </View>
    );

}


const styles = StyleSheet.create({
    buttonMenu: {
        alignItems: "center",
    }, textMenu: {
        color: '#fff'
    },

});
