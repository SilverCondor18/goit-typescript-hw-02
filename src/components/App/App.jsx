import Profile from '../Profile/Profile';
import userData from "../../userdata.json";

function App() {

  return (
    <>
      <Profile profile={userData} />
    </>
  )
}

export default App
