import UsersListItem from './users-list-item';

function UsersList(props) {
  return (
    <ul className='list-group users-list'>
      {props.users.map(user => (
        <UsersListItem key={user.id} {...user} onClick={() => props.onUserClick(user)} />
      ))}
    </ul>
  );
}

export default UsersList;