
import Teams from './Teams'
import TeamMembers from './TeamMembers'

const Employees = ({ employees, handleTeamSelectionChange, handleEmployeeCardClick, selectedTeam }) => {

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <Teams handleTeamSelectionChange={handleTeamSelectionChange} selectedTeam={selectedTeam} />
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees