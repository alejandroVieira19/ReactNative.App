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
