import {FC} from 'react';
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import styles from './RecipeItem.module.css'
import {useActions, useAppSelector} from '../../hooks/redux.ts';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

type PropsType = {
    recipe: RecipeType
}

export const RecipeItem: FC<PropsType> = ({recipe}) => {

    const favorites = useAppSelector(state => state.favorite)

    const {toggleFavorite} = useActions()

    const isFavorite = favorites.find(r => r.id === recipe.id)

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}></div>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{recipe.title}</h3>
                <div>{isFavorite
                    ? <AiFillHeart onClick={() => toggleFavorite(recipe)}/>
                    : <AiOutlineHeart onClick={() => toggleFavorite(recipe)}/>}</div>
            </div>
            <button
                onClick={() => toggleFavorite(recipe)}
                className={styles.button}
            >
                {isFavorite ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    );
};