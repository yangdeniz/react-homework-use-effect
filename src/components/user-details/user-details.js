import { useEffect, useState } from 'react';
import ProgressBar from '../progress-bar/progress-bar';

function UserDetails({info}) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = () => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_API_URL + `${info.id}.json`)
      .then(response => response.json())
      .then(user => setUser(user))
      .then(() => setIsLoading(false));
  };

  useEffect(fetchUser, [info.id]);

  if (isLoading) {
    return <ProgressBar />;
  }

  return (
    <div className='card'>
      <img className='card-img-top' src={user.avatar} alt='' />
      <div className='card-body'>
        <p className='card-text'>{user.name}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>City: {user.details.city}</li>
        <li className='list-group-item'>Company: {user.details.company}</li>
        <li className='list-group-item'>Position: {user.details.position}</li>
      </ul>
    </div>
  );
}

export default UserDetails;