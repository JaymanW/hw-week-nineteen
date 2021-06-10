import React, { useState, useEffect } from 'react'
import './App.css';

// COMPONENTS
import Header from './components/Header'
import GenderFilterBtn from './components/GenderFilterBtn'
import EmployeeTable from './components/EmployeeTable'

function App() {
  const [genderFilter, setGenderFilter] = useState('both');
  // name sort state

  useEffect(() => {
    console.log(`filter state: ${genderFilter}`);
  }, [genderFilter])

  const handleFilter = (e) => {
    let gender = e.target.dataset.gender;
    setGenderFilter(gender);
}
  
  return (
    <div className="App">
      <Header />
      <div className="filter-cnt">
        <GenderFilterBtn gender="male" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'male' ? 'active' : 'grayed-out'}/>
        <GenderFilterBtn gender="female" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'female' ? 'active' : 'grayed-out'}/>
        <GenderFilterBtn gender="both" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'both' ? 'active' : 'grayed-out'} />
      </div>
      {/* ALPHABETICAL FILTER BUTOTNS */}
      {/* DATA TABLE gender={genderFilter} names={namesSort}*/}
      <EmployeeTable />
    </div>
  );
}

export default App;
