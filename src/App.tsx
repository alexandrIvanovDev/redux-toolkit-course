import {FavoritesList} from './components/favorites/FavoritesList.tsx';
import {RecipesList} from './components/recipesList/RecipesList.tsx';


function App() {
    return (
        <div>
            <RecipesList/>
            <FavoritesList/>
        </div>
    )
}

export default App