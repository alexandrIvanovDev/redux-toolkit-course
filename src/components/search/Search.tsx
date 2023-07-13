import {KeyboardEvent, FC, useState} from 'react';
import styles from './Search.module.css';
import inputStyles from '../addRecipe/AddRecipe.module.css';
import {FiDelete} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';

type PropsType = {
    setTerm: (value: string) => void
}

export const Search: FC<PropsType> = ({setTerm}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const searchRecipe = () => {
        setTerm(searchTerm)
    }

    const clearTerm = () => {
        setSearchTerm('')
        setTerm('')
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchRecipe()
        }
    }

    return (
        <div className={styles.searchBlock}>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.currentTarget.value)}
                className={inputStyles.input}
                placeholder={'Search'}
                onKeyDown={onKeyHandler}
            />
            <div className={styles.deleteWrapper}>
                <div className={styles.deleteIcon} onClick={clearTerm}><FiDelete/></div>
            </div>
            <div className={styles.search}>
                <div className={styles.searchIcon} onClick={searchRecipe}><AiOutlineSearch/></div>
            </div>
        </div>
    )
}