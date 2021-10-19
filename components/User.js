import Router from "next/router";

const User = ({user}) => {
  return (
    <li
      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
      onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}
    >
      <div>
        <h5>{user.first_name} {user.last_name}</h5>
        <p>{user.email}</p>
      </div>
      <img
        src={user.avatar}
        alt={user.last_name}
        style={{borderRadius: '50%'}}/>
    </li>
  )
}

export default User
