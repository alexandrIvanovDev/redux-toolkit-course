import {useAppSelector} from '../../hooks/redux.ts';
import {FC} from 'react';
import styles from './FavoritesList.module.css'


export const FavoritesList: FC = () => {

    const favorites = useAppSelector(state => state.favorite)

    return (
        <div className={styles.favoritesBlock}>
            <h3>Amount of favorites recipes: {favorites.length}</h3>
            {favorites.map(f => <div key={f.id}>{f.title}</div>)}
        </div>
    );
};