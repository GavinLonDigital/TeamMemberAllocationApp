import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div id={employee.id} onClick={handleEmployeeCardClick} style={{ cursor: "pointer" }} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')}>
      {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" alt="profile" /> : <img src={femaleProfile} className="card-img-top" alt="profile" />}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard