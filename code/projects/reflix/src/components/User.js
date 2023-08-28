import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
  return (
    <Link to={`/Catalog`} state={{ user: user.name }}>
      <div className="user">
          <span>{user.name}</span>
      </div>
    </Link>

  );
}


export default User;