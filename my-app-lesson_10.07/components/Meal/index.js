import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Meal = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Text> Move to Categories</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Meal;