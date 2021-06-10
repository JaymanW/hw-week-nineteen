import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// COMPONENTS
import Header from './components/Header';
import GenderFilterBtn from './components/GenderFilterBtn';
import AlphabeticalSortBtn from './components/AlphabeticalSortBtn';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [genderFilter, setGenderFilter] = useState('both');
  const [alphabeticalSort, setAlphabeticalSort] = useState('none');
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
        setEmployeeData(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  useEffect(() => {
    console.log(`filter state: ${genderFilter}`);
  }, [genderFilter])

  useEffect(() => {
    console.log(`sort state: ${alphabeticalSort}`);
  }, [alphabeticalSort])

  const handleFilter = (e) => {
    let gender = e.target.dataset.gender;
    setGenderFilter(gender);
  }

  const handleSort = (e) => {
    if (alphabeticalSort === 'none') {
      setAlphabeticalSort('asc');
    } else if (alphabeticalSort === 'desc') {
      setAlphabeticalSort('asc');
    } else if (alphabeticalSort === 'asc') {
      setAlphabeticalSort('desc');
    } else {
      setAlphabeticalSort('none');
    }
  }
  
  return (
    <div className="App">
      <Header />
      <div className="filter-cnt">
        <GenderFilterBtn gender="male" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'male' ? 'active' : 'grayed-out'}/>
        <GenderFilterBtn gender="female" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'female' ? 'active' : 'grayed-out'}/>
        <GenderFilterBtn gender="both" filterClick={(e) => handleFilter(e)} activeStyle={genderFilter === 'both' ? 'active' : 'grayed-out'} />
      </div>
      <AlphabeticalSortBtn sort={alphabeticalSort} sortClick={(e) => handleSort(e)}/>
      {/* DATA TABLE gender={genderFilter} names={namesSort}*/}
      <EmployeeTable employeeData={employeeData} sort={alphabeticalSort} filter={genderFilter} />
    </div>
  );
}

export default App;
