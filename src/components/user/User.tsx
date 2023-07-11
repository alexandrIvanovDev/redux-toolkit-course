import {FC} from 'react';
import {useActions, useAppSelector} from '../../hooks/redux.ts';

export const User: FC = () => {

    const {user} = useAppSelector(state => state.users)

    const {getUserById} = useActions()

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
            <button onClick={() => getUserById(1)}>get user</button>
            {user.name &&
                <>
                    <div>{user.id}. {user.name}</div>
                    <div>email: {user.email}</div>
                </>}
        </div>
    );
};