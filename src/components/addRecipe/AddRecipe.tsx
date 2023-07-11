import {FormEvent, useState} from 'react';
import {useAddRecipeMutation} from '../../store/api/recipesApi.ts';
import stylesForButton from '../recipeItem/RecipeItem.module.css'
import styles from './AddRecipe.module.css'
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import {v1} from 'uuid';


export const AddRecipe = () => {

    const [title, setTitle] = useState('')

    const [addRecipe] = useAddRecipeMutation()

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const recipe: RecipeType = {id: +v1(), title, img: ''}
        await addRecipe(recipe)
        setTitle('')
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                className={styles.input}
            />
            <button className={stylesForButton.button} type='submit'>Add recipe</button>
        </form>
    );
};