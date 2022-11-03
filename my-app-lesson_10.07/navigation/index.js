import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Meals Screens
import Categories from '../components/Categories';
import Meals from '../components/Meals';
import Meal from '../components/Meal';

const MealsStack = createNativeStackNavigator();

const ApplicationNavigation = () => {
    return(
        <NavigationContainer>
            <MealsStack.Navigator initialRouteName='Categories'>
                <MealsStack.Screen
                    name='Categories'
                    component={Categories}/>
                <MealsStack.Screen
                    name='Meals'
                    component={Meals}/>
                <MealsStack.Screen
                    name='Meal'
                    component={Meal}/>
            </MealsStack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigation;