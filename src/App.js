import { useEffect } from 'react';

import { useDispatch, } from 'react-redux';
import { setContactList, } from './state/reducers/contactsReducer';

import 'antd/dist/antd.css';
import MainLayout from './components/MainLayout';

// dummy data
import contactData from './data/contacts';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // fill up contacts state with dummy data
    dispatch(setContactList(contactData));
  }, [])

  return (
    <MainLayout />
  );
}

export default App;
