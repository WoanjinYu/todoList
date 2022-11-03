import {NavigationContainer } from '@react-navigation/natvie';
import {createNativesStackNavigator } from '@react-navigation/native-stack';

//Meals Screens
import categories from '../components/categories';
import meals from '../components/meals';
import meal from '../components/meal';

const mealStack = createNativesStackNavigator();

const Applicationnavigation = () => {
    return(
        <NavigationContainer>
            <mealStack.Navigator initialRouteName='categories'>
                <mealStack.Screen
                    name='categories'
                    component={categories}/>
                <mealStack.Screen
                    name='meals'
                    component={meals}/>
                <mealStack.Screen
                    name='meal'
                    component={meal}/>
            </mealStack.Navigator>
        </NavigationContainer>
    )
}

export default Applicationnavigation;