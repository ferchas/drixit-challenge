import axios from 'axios';
import instance from '../.';

const login = ({ user, pass}) => {
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/api/v0/authenticate`,
    data: {
      "username": user,
      "password": pass
    },
  }).then((res)=> {
    instance.defaults.headers.authorization = `Bearer ${res?.data?.jwt}`;
    return res;
  });
}; 

const me = () => {
  return instance.get('/api/v0/users/me').then(res => res?.data?.payload);
};

export {
  login,
  me,
  //recover,
  //reSetPassword,
}