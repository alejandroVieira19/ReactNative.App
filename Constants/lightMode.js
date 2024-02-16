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
    }
}

export default LightMode;


