
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return (
    employees.map((employee) => (

      <TeamMemberCard employee={employee}
        handleEmployeeCardClick={handleEmployeeCardClick}
        selectedTeam={selectedTeam} />

    ))
  )
}

export default TeamMembers