import {ChangeEvent, FormEvent, useState} from 'react';
import {useAddRecipeMutation} from '../../store/api/recipesApi.ts';
import stylesForButton from '../recipeItem/RecipeItem.module.css'
import styles from './AddRecipe.module.css'
import {RecipeType} from '../../store/favorite/favorite-slice.ts';
import {v1} from 'uuid';


export const AddRecipe = () => {

    const [title, setTitle] = useState('')

    const [img, setImg] = useState('')

    const [error, setError] = useState<null | string>(null)

    const [addRecipe] = useAddRecipeMutation()

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title.trim() === '') {
            setError('Error: the title should not be empty')
            return
        }
        const recipe: RecipeType = {id: +v1(), title, img}
        await addRecipe(recipe)
        setTitle('')
        setImg('')
    }

    const onTitleInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(null)
        }
        setTitle(e.currentTarget.value)
    }

    return (
        <form onSubmit={submitForm} className={styles.form}>
            <label>Create new recipe:</label>
            <input
                type="text"
                value={title}
                onChange={onTitleInputHandler}
                className={styles.input}
                placeholder='Title'
            />
            {error && <div>{error}</div>}
            <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.currentTarget.value)}
                className={styles.input}
                placeholder='Img'
            />
            <button className={stylesForButton.button} type='submit'>Add recipe</button>
        </form>
    );
};