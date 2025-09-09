import { Profile } from 'entities/Profile';

export interface EditableProfileSchema {
    data?: Profile,
    formData?: Profile,
    readonly: boolean,
    isLoading: boolean,
    error?: string
}
