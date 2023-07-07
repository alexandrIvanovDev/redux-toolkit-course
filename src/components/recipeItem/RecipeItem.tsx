import {FC} from 'react';
import {RecipeType, toggleFavorite} from '../../store/favorite/favorite-slice.ts';
import styles from './RecipeItem.module.css'
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks/redux.ts';

type PropsType = {
    recipe: RecipeType
}

export const RecipeItem: FC<PropsType> = ({recipe}) => {

    const favorites = useAppSelector(state => state.favorite)

    const dispatch = useDispatch()

    const isFavorite = favorites.find(r => r.id === recipe.id)

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}></div>
            <h3>{recipe.title}</h3>
            <button
                onClick={() => dispatch(toggleFavorite(recipe))}
            >
                {isFavorite ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    );
};