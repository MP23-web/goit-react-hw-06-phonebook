import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;