
import TeamMemberCard from './TeamMemberCard';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMembers = () => {

  const { employees } = useContext(DataContext);

  return (
    employees.map((employee) => (
      <TeamMemberCard key={employee.id} employee={employee} />
    ))
  )
}

export default TeamMembers