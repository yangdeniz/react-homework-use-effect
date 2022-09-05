import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import UsersList from './components/users-list/users-list';
import ProgressBar from './components/progress-bar/progress-bar';
import UserDetails from './components/user-details/user-details';

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = () => {
    fetch(process.env.REACT_APP_API_URL + 'users.json')
      .then(response => response.json())
      .then(users => setUsers(users))
      .then(() => setIsLoading(false));
  }

  const onUserClick = (user) => {
    setUsers(prev => (
      prev.map(item => item.id === user.id 
        ? {...item, isActive: !item.isActive} 
        : {...item, isActive: false})
    ));
    setActiveUser(activeUser?.id === user.id ? null : user);
  }

  useEffect(fetchUsers, []);

  return (
    <div className='container'>
      {isLoading 
        ? <ProgressBar /> 
        : (
          <div className='users'>
            <UsersList users={users} onUserClick={onUserClick} />
            {activeUser && <UserDetails info={activeUser} />}
          </div>
        )
      }
    </div>
  );
}

export default App;
