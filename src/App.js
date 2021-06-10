import './App.css';

// COMPONENTS
import Header from './components/Header'
import EmployeeTable from './components/EmployeeTable'

function App() {
  // gender filter state
  // name sort state
  
  return (
    <div className="App">
      <Header />
      {/* MALE/FEMALE/ALL FILTER BUTTONS */}
      {/* ALPHABETICAL FILTER BUTOTNS */}
      {/* DATA TABLE gender={genderFilter} names={namesSort}*/}
      <EmployeeTable />
    </div>
  );
}

export default App;
