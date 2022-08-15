import './App.css';
import Nav from './Nav'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'
import GroupedTeamMembers from './GroupedTeamMembers'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}>
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>

  );
}

export default App;