import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileReadonly = (state: StateSchema) => state.editableProfile?.readonly;
