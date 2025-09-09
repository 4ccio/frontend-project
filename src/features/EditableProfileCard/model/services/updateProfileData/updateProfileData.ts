import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, profileActions } from 'entities/Profile';
import {
    getEditableProfileFormData,
} from '../../selectors/getEditableProfileFormData/getEditableProfileFormData';

const URL = '/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'editableProfile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkAPI;

        const formData = getEditableProfileFormData(getState());

        try {
            const response = await extra.api.put<Profile>(URL, formData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(profileActions.setData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
