import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {rootActions, RootStateType} from '../store/store.ts';
import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [])
}