import React, { useEffect, useState } from 'react';
import EntryForm from './components/NewEntryForm';
import Notification from './components/Notification';
import entryServices from './services/entries';
import { Entry, NewDiaryEntry, ValidationError } from './types';
import axios from 'axios';
import Diary from './components/Entry';

function App() {
  const [ entries, setEntries ] = useState([]);
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    entryServices.getAll().then(entries => setEntries(entries))
  }, []);

  const addEntry = async (values: NewDiaryEntry) => {
    try {
      const entry = await entryServices.create(values);
      setEntries(entries.concat(entry));
      setMessage('Successfully added entry');
      setTimeout(() => {
        setMessage('');
      }, 5000);

    } catch (e: unknown) {
      if (axios.isAxiosError<ValidationError, Record<string, unknown>>(e)) {
        console.log('status', e.status);
        console.error('response', e.response);
        setMessage(String(e.response?.data))
        setTimeout(() => {
          setMessage('')
        }, 5000)
      } else {
        console.error(e);
        setMessage(String(e))
        setTimeout(() => {
          setMessage('')
        }, 5000)
      }
    }
  };

  return (
    <div className="App">
      <Notification message={message}/>
      <EntryForm onSubmit={addEntry}/>
      {entries.map((entry: Entry) => <Diary  key={entry.id} entry={entry}/>)}
    </div>
  );
}

export default App;
