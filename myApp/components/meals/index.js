import { Text, View, SytleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});

const meal = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('meal')}>
                <Text> Move to meal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default meals;