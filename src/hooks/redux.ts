import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootStateType} from '../store/store.ts';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector