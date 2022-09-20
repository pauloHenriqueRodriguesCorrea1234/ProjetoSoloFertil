import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Footer ({text, logo}) {
    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>{text}</Text>
            <Image style={styles.image} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:'#002e00',
        flexDirection: "row",
        justifyContent:'center',
    },
    text:{
        color:'#fff',
        padding:9,
        fontSize:14,
    },
    image:{
        marginTop:9,
        height:25,
        width:25
    }
})