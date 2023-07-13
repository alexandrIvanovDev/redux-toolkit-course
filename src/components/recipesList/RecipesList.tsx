import {RecipeItem} from '../recipeItem/RecipeItem.tsx';
import {FC, useState} from 'react';
import styles from './RecipesList.module.css'
import {useGetRecipesQuery} from '../../store/api/recipesApi.ts';
import {AddRecipe} from '../addRecipe/AddRecipe.tsx';
import {Search} from '../search/Search.tsx';

export const RecipesList: FC = () => {

    const [term, setTerm] = useState('')

    const {data} = useGetRecipesQuery(term)

    return (
        <div className={styles.container}>

            <Search setTerm={setTerm}/>

            {data
                ? <div className={styles.recipesBlock}>
                {data.map(r => <RecipeItem recipe={r} key={r.id}/>)}
            </div>
            : <div>Recipes not found</div>
            }
            <div>
                <AddRecipe/>
            </div>
        </div>
    );
};