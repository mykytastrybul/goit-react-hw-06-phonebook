import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(window.localStorage.getItem('contacts')) || [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});

export const { saveContact, deleteContact, filterContacts } =
  contactsSlice.actions;
