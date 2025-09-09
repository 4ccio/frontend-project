import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileFormData = (state: StateSchema) => state.editableProfile?.formData
    || state.editableProfile?.data
    || state.profile?.data;
