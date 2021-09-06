import { useState } from 'react';
import { useHistory } from "react-router-dom";

import AlerMsg from '../../components/alertMsg';
import Button from '../../components/button';
import Input from '../../components/input';
import { LayoutBusines } from '../../components/layout';
import Link from '../../components/link';
import Spinner from '../../components/spinner';

import useAuth from '../../hooks/auth';

import { login } from '../../services/user';

import './style.scss';

const Login = () => {
  const history = useHistory();

  const [messageRes, setMessageRes] = useState('');
  const [disabledInp, setDisabledInp] = useState(false);
  const [typeMsg, setTypeMsg] = useState('');

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const [, setJwt] = useAuth();

  const handleButton = () => {
    setDisabledInp(true);

    login({ user, pass }).then(({ data, status }) => {
      if (status === 200) {
        setJwt(data?.jwt);
        history.push('/user-info');
      } else {
        setTypeMsg('danger');
        setMessageRes(data?.msj);
      }
    }).catch(e => {
      setTypeMsg('danger');
      setMessageRes(e?.response?.data?.msj || 'Error connect');
    });
    setDisabledInp(false);
  };

  return (
    <LayoutBusines>
      <div className="page-login">
        <img className="page-login__logo" src="/icon/user-24px.svg" />
        <div className="page-login__input">
          <Input title="Email" typeBt="email" onChange={setUser} value={user} />
          <Input title="Contraseña" typeBt="password" onChange={setPass} value={pass} />
          <Link value="Olvidé contraseña" />
        </div>
        <div className="page-login__action">
          <Button value="Iniciar Sesión" onClick={handleButton} />
          <Link value="Crear una cuenta" />
        </div>
        <div className="page-login__info">
          {disabledInp &&
            <div className="text-center">
              <Spinner />
            </div>
          }
          <AlerMsg msg={messageRes} typeMsg={typeMsg} />
        </div>
      </div>
    </LayoutBusines>
  );
};
export default Login;
