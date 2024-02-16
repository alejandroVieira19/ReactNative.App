import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    
    flex:1,
    backgroundColor: 'black'
    },
    containerLogo: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    
    },
    imageStyle: {
    width: '120%',
    height: '50%',
    
    },
    containerText: {
    flex:1,
    backgroundColor: '#a7a3b4',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom:12,
    
    },
    text: {
    color: '#090909'
    },
    loginBtn: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '32%',
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',
    },
    SignUpBtn: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    backgroundColor: '#090909',
    justifyContent: 'center',
    alignItems: 'center',
    
    },
    textBtn: {
    fontSize: 20,
    color: '#a7a3b4',
    fontWeight: 'bold',
    },
    scrollView: {
    flex: 1,
    backgroundColor:'white'
    },
    });

 export default styles;