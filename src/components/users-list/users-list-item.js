function UsersListItem(props) {
  return (
    <li className={`list-group-item ${props.isActive ? 'active' : ''}`} onClick={props.onClick}>
      {props.name}
    </li>
  );
}

export default UsersListItem;