import {StyleSheet, Pressable, Text, View} from 'react-native';


export default function NavDesktop({navigation}) {



    return (
        <View style={{flexDirection:'row',marginTop:20}}>
                <Pressable
                    title="Home"
                    style={styles.buttonMenu}
                    onPress={()=>{navigation.navigate('Home');}}
                ><Text style={styles.textMenu}>Home</Text></Pressable>

                <Pressable
                    title="Connection"
                    style={[styles.buttonMenu,{marginRight: '25%'}]}
                    onPress={()=>{navigation.navigate('Connection');}}
                ><Text style={styles.textMenu}>Connection</Text></Pressable>

        </View>
    );

}


const styles = StyleSheet.create({
    buttonMenu: {
        alignItems: "center",
        marginLeft:20,
    }, textMenu: {
        color: '#fff'
    },

});
