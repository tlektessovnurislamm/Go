
import React, { useState } from 'react';
import ContainerPage from './components/ContainerPage';
import './App.css';
import { club } from './data';
import NavBar from './components/NavBar';                        
import TopNavBar from './components/TopNavBar';

export default function App() {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const filteredClubs = club.filter((club) => {
    return club.Name.toLowerCase().includes(searchTerm.toLowerCase()); 
  });

  return (
    <main>
      <div className='search'>
        <input type="text" placeholder="поиск" value={searchTerm} onChange={handleSearchChange} /> 
        <button><img src="./src/assets/search.png" alt="Search" /></button> 
      </div>
      <TopNavBar />
      <div>
        {filteredClubs.map((club) => ( 
          <ContainerPage key={club.id} Name={club.Name} Price={club.Price} Place={club.Place} />
        ))}
      </div>
      <NavBar />
    </main>
  );
}



