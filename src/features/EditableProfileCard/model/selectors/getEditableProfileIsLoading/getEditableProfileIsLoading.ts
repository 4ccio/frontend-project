import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileIsLoading = (state: StateSchema) => state.editableProfile?.isLoading;
