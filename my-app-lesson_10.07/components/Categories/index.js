import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const tempList = [
  {
    id: 1,
    name: 'category1'
  },
  {
    id: 2,
    name: 'category2'
  }
];


const Category = ({item, navigate}) => {
  <View style={styles.category}>
    <TouchableOpacity onPress={() => navigate('Meals')}>
        <Text>{item.name}</Text>
    </TouchableOpacity>
  </View>
}

const Categories = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <FlatList
              data={tempList}
              columnWrapperStyle={styles.category}
              renderItem={(innerPros) => <Category {...innerPros} navigate={navigation.navigate}/>}
              numColumns={2}/>
        </View>
    )
}

export default Categories;