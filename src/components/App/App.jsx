import Profile from '../Profile/Profile';
import userData from '../../userdata.json';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {

  return (
    <>
      <Profile profile={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
