import React from 'react'
import { ProfileCard } from './ProfileCard';
import { TimeCard } from './TimeCard';
import { List } from '../assets/filteredByCategories'
import '../styles/App.css';

function App() {
  return (
    <section className='filterable-product-table'>
      <ProfileCard/>
      <TimeCard list={List} />
    </section>

  );
}

export default App;

