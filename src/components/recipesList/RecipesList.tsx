import {RecipeItem} from '../recipeItem/RecipeItem.tsx';
import {FC} from 'react';
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import styles from './RecipesList.module.css'

type PropsType = {
    recipes: Array<RecipeType>
}

export const RecipesList: FC<PropsType> = ({recipes}) => {
    return (
        <div className={styles.recipesBlock}>
            {recipes.map(r => <RecipeItem recipe={r} key={r.id}/>)}
        </div>
    );
};