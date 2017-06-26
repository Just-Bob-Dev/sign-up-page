const users = [
  { 'username': 'Rob',
    'password': 'chillen'
  },
  { 'username': 'Elizabeth',
    'password': 'MoreChillen'
  },
  {
    'username': 'Nagy',
    'password': 'fianceCitty'
  }
];

function getUser(username)
{
  return users.username.find(function(user){
    return user.username === username;
  });
}

function Authenticate(req, username, password){
  let authenticatedUser = users.find(function(user){
    if(user.username === username && user.password === password){
      console.log('true');
      req.session.authenticated = true;
    }
    else{
      return false
    }
  });
  return req.session
}


module.exports = {
  getUsr : getUser,
  getAllUsers : users,
  Auth : Authenticate
}
