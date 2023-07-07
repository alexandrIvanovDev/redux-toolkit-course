import {RecipeType} from './store/favorite/favorite-slice.ts';
import {FavoritesList} from './components/favorites/FavoritesList.tsx';
import {RecipesList} from './components/recipesList/RecipesList.tsx';


function App() {

    const recipes: Array<RecipeType> = [
        {id: 1, title: 'Pasta'},
        {id: 2, title: 'Stir fry chicken'},
        {id: 3, title: 'Tomato soup'}
    ]

    return (
        <div>
            <RecipesList recipes={recipes}/>
            <FavoritesList/>
        </div>
    )
}

export default App