import { text, View, TouchableOpacity, FlatList } from "react-native-web";
import styles from './styles';

const tempList = [
    {
        id: 1,
        name : 'category1'
    },
    {
        id: 2,
        name : 'category2'
    },
];

const category = ({itme, navigate}) => {

    <View sytle={styles.category}>
        <TouchableOpacity onPress={() => navigate('meals')}>
            <Text>{itme.name}</Text>
        </TouchableOpacity>
    </View>
}

const categories = ({ navigatation }) => {

    return(
        <View sytle={styles.container}>
            <FlatList
                date={tempList}
                columnWrapperStyle={styles.category}
                renderItem={(innerPros) => <category {...innerPros} navigate={navigatation.navigate}/>}
                numColoumns={2}/>
        </View>
    )
}

export default categories;