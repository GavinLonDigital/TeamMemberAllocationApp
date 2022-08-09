const Footer = () => {
  var today = new Date();
  return (
    <footer class="row justify-content-center mt-3 mb-3">
      <div class="col-8">
        <h5>Team Membership Allocation App - {today.getFullYear()}</h5>
      </div>
    </footer>
  )
}
export default Footer