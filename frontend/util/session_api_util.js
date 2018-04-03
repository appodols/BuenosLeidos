/*jshint esversion: 6 */

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: user}
  });
};


export const login = user => {
debugger
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
