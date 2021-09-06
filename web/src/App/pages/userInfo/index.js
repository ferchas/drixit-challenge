import { useEffect } from 'react';
import { me } from '../../services/user';

function UserInfo() {

  useEffect(()=> {
    me().then(data => {
      console.log(data, 'data');
    }).catch(e => {
      console.log(e);
    })
  },[]);
  return (
    <p>
      HI user Info
    </p>
  );

}

export default UserInfo;
