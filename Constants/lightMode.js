import COLORS from "./Colors";

 const LightMode = {
   //light mode
  modeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  darkModeText: {
    color: 'white', // Altera a cor do texto para branco no modo escuro
  },
  lightView: {
    backgroundColor: 'white'
  },
  containerTextLight: {
    backgroundColor: '#090909'
  },
  lightText: {
    color:'white'
  },
  borderLightText: {
    color:'white'
  },
  lightBorder: {
    backgroundColor: '#af1313'

  },
}

export const loginLightMode = {
    darkModeText: {
        color: '#a7a3b4', 
    },
      opacityMode: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
      modeText: {
        color: '#a7a3b4',
        alignSelf:'center',
        height: '20%',
        
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
      darkModeText: {
        color: '#a7a3b4', 
      },
      lightView: {
        backgroundColor: 'white'
      },
      containerTextLight: {
        backgroundColor: '#090909'
      },
      lightText: {
        color:'white'
      },
      borderLightText: {
        color:'white'
      },
      lightBorder: {
        backgroundColor: '#af1313'
      
      },
      viewMode: {
        backgroundColor: 'white'
      },
      blackbackground: {
        backgroundColor: 'black'
      },
      blacktext: {
        color: 'black'
    }
}

export const registerLightMode = {
    lightArea: {
        backgroundColor: 'white'
    },
    lightText: {
        color: COLORS.black
    },
    lightOpacity: {
        backgroundColor:COLORS.uchihaRed,
        
    },
    lightSignUp: {
        color: COLORS.white
    },
    error: {
        width: "100%",
        height: 48,
        borderColor: COLORS.uchihaRed,
        borderWidth:1,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:22
    },
    errorBorder: {
      color: COLORS.white,
      width: '12%',
      borderRightWidth: 1,
      height: '100%',
      borderRightColor: COLORS.uchihaRed
    }, 
    signUpWithLight: {
      backgroundColor: COLORS.black
    },
    phoneInput: {
      color: 'red',
        width: '12%',
        borderRightWidth: 1,
        height: '100%',
        borderRightColor: COLORS.uchihaPurple
    }
  
}

export default LightMode;


