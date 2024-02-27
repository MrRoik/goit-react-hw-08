import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d7621827d9a3bc1d7ae651.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
          
  });

  export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );