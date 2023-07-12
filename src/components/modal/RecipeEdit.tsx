import {FC, KeyboardEvent, useState} from 'react';
import styles from './RecipeEdit.module.css'
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import inputStyles from '../addRecipe/AddRecipe.module.css'
import {useChangeRecipeMutation} from '../../store/api/recipesApi.ts';

type PropsType = {
    isActive: boolean
    closeModal: () => void
    recipe: RecipeType
}

export const RecipeEdit: FC<PropsType> = ({isActive, closeModal, recipe}) => {

    const [title, setTitle] = useState(recipe.title)

    const [editMode, setEditMode] = useState(false)

    const [changeRecipe] = useChangeRecipeMutation()

    const saveRecipe = async () => {
        closeModal()
        setEditMode(false)
        await changeRecipe({...recipe, title})
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveRecipe()
        }
    }

    return (
        <div className={isActive ? `${styles.modal} ${styles.active}` : styles.modal} onClick={saveRecipe}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <h3>Recipe</h3>
                {recipe.img && <img src={recipe.img} alt="recipe" className={styles.img}/>}
                {editMode
                    ? <input value={title}
                             onChange={(e) => setTitle(e.currentTarget.value)}
                             className={inputStyles.input}
                             onKeyDown={onEnterHandler}
                             autoFocus/>
                    : <span onDoubleClick={() => setEditMode(true)}>{title}</span>
                }
            </div>
        </div>
    )
}