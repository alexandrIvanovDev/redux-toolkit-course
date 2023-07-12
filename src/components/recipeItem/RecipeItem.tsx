import {FC, useState} from 'react';
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import styles from './RecipeItem.module.css'
import {useActions, useAppSelector} from '../../hooks/redux.ts';
import {AiFillHeart, AiOutlineEdit, AiOutlineHeart} from 'react-icons/ai';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {useDeleteRecipeMutation} from '../../store/api/recipesApi.ts';
import {RecipeEdit} from '../modal/RecipeEdit.tsx';

type PropsType = {
    recipe: RecipeType
}

export const RecipeItem: FC<PropsType> = ({recipe}) => {

    const favorites = useAppSelector(state => state.favorite)

    const [isModalActive, setIsModalActive] = useState(false)

    const [deleteRecipe] = useDeleteRecipeMutation()

    const {toggleFavorite, removeFromFavorite} = useActions()

    const isFavorite = favorites.find(r => r.id === recipe.id)

    const showModal = () => setIsModalActive(true)

    const hideModal = () => setIsModalActive(false)

    const removeRecipe = () => {
        deleteRecipe(recipe.id)
        removeFromFavorite(recipe)
    }

    return (
        <div className={styles.wrapper}>

            <RecipeEdit isActive={isModalActive} closeModal={hideModal} recipe={recipe}/>

            <div className={styles.deleteWrapper}>
                <div className={`${styles.icon} ${styles.delete}`} onClick={removeRecipe}><RiDeleteBin5Line/></div>
            </div>
            <div className={styles.editWrapper}>
                <div className={`${styles.icon} ${styles.edit}`} onClick={showModal}><AiOutlineEdit/></div>
            </div>

            {recipe.img ? <img src={recipe.img} alt="" className={styles.img}/> : <div className={styles.img}></div>}

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