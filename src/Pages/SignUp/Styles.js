import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a7a3b4'
  },
  animatableView: {
  marginTop: '14%',
  marginBottom: '8%',
  paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#090909'
  },
  animatableTitle: {
    backgroundColor: 'black',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 25,
    color: '#a7a3b4',
    marginTop: 29,
    marginBottom: 10
  },
  inputView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
   
  },
  input: {
    fontSize:16,
    color: 'white',
    height: 40,
    marginBottom:15,
    alignSelf: 'center',
    borderColor: '#a7a3b4'
  },
  login: {
    backgroundColor: '#a7a3b4',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lgnBtn: {
    color: '#090909',
    fontWeight: 'bold',
    fontSize: 18
  },
  register: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerBtn: {
    color: '#a7a3b4'
  },
  containerLogo: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '60%',
    height: '30%',
    alignSelf:'center'
  },
  });

  export default styles