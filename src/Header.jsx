const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="row justify-content-center">
      <div className="col-8">
        <h1>Team Member Allocation</h1>
        <h3>{selectedTeam} has {teamMemberCount} Members</h3>
      </div>
    </header>
  )
}
export default Header