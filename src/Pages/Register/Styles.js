import { StyleSheet } from "react-native"

import  COLORS  from "./../../../Constants/Colors"


export const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        backgroundColor: COLORS.black
    },
    safeView: {
        flex: 1, 
        marginHorizontal: 22,
    },
    textView:{
        marginVertical: 22

    },
    createAccount: {
        fontSize:22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.uchihaPurple
    },
    createText: {
        fontSize: 16,
        color: COLORS.uchihaPurple,
        fontStyle: 'italic'
    },
    emailView: {
        marginBottom: 12
    },
    emailText: {
        fontSize:16,
        fontWeight:400,
        marginVertical:8,
        color: COLORS.uchihaPurple
    },
    borderView: {
        width: "100%",
        height: 48,
        borderColor: COLORS.uchihaPurple,
        borderWidth:1,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:22
    },
    TextInput: {
        color: COLORS.white,
        width: '100%'
    },
    phoneView: {
        width: "100%",
        height: 48,
        borderColor: COLORS.uchihaPurple,
        borderWidth:1,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 22,
    },
    phoneInput: {
        color: COLORS.white,
        width: '12%',
        borderRightWidth: 1,
        height: '100%',
        borderRightColor: COLORS.uchihaPurple
    },
    enterYourPhone: {
        width: '80%',
        color: COLORS.white
    },
    iconOpacity: {
        position: 'absolute',
        right: 12
    },
    
    signUpOpacity:{
        paddingHorizontal:20,
        padding:20
    },
    signborderView: {
        width: "100%",
        height: 48,
        backgroundColor: COLORS.uchihaPurple,
        borderWidth:1,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:22,
        borderColor: 'black',
        
    },
    signText: {
      right: 12,
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }


    
})