import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, Profile } from 'entities/Profile';
import { EditableProfileSchema } from '../types/editableProfile';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

const initialState: EditableProfileSchema = {
    data: undefined,
    formData: undefined,
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const editableProfileSlice = createSlice({
    name: 'editableProfile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload;
                state.formData = action.payload;
            });
    },
});

export const {
    actions: editableProfileActions,
    reducer: editableProfileReducer,
} = editableProfileSlice;
