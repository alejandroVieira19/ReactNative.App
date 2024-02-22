//Criar um reload Page
const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      
    }, 2000);
  }, []);

return (
  
  <ScrollView
  contentContainerStyle={styles.scrollView}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  }
>
  <View style={styles.container}>
    <View style={styles.containerLogo}>
      <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/itachi.jpg')}
        style={styles.imageStyle}
        resizeMode='contain'
      />
    </View>

    <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerText}>
      <Text style={styles.title}>Welcome to the Uchiha World App.</Text>
      <Text style={styles.text}>Login to get started</Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.textBtn}>Log In</Text>
      </TouchableOpacity>
      </Animatable.View>
    </View>
</ScrollView>
)


//JA SE CONECTOU A BASE DE DADOS ORACLE, AGORA E CRIAR O LOGIN E FAZER TESTES...


//1.Já mandei o darkmode para login, agr é fazer as mesmas modificacoes
//2.registar componente
//3.aprender a fazer outros tipos de register (google, phoneNumber, etc)


//FAZER A VERIFICACAO DE DADOS OU SEJA, MUDAR A COR E A ANIMACAO QUANDO PASSWORD N TIVER NO MINIMO 8 CARACTERES
//APRENDER A VER SE CASO EXISTA USERNAME OU EMAIL, ENTAO MUDAR TAMBEM A ANIMACAO



//TENTAR CORRIGIR O BUG NO LIGHT MODE O COUNTRY CODE NAO ESTA A APARECER
//AUTENTICAR COM O FACEBOOK E GOOGLE
