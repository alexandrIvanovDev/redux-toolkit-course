import {RecipeItem} from '../recipeItem/RecipeItem.tsx';
import {FC} from 'react';
import styles from './RecipesList.module.css'
import {useGetRecipesQuery} from '../../store/api/recipesApi.ts';

export const RecipesList: FC = () => {

    const {data} = useGetRecipesQuery('')

    return (
        <div className={styles.container}>
            {data &&
            <div className={styles.recipesBlock}>
                {data.map(r => <RecipeItem recipe={r} key={r.id}/>)}
            </div>}
        </div>
    );
};