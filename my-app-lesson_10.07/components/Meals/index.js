import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Meals = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Meal')}>
                <Text> Move to Meal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Meals;