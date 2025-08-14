import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (
    props,
) => {
    const {
        children,
        removeAfterUnmount = true,
        reducers,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key]: ReducerListEntry) => {
                    store.reducerManager.remove(key);
                    dispatch({ type: `@REMOVE ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
