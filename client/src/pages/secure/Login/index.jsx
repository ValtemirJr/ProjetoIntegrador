import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { LoginContainer, LoginForm } from './styles';

export default function Login() {
  return (
    <LoginContainer>
      <LoginForm>
        <Logo style={{ width: '100px', height: '100px' }} />
        <h1>Bem vinda ao sistema</h1>
        <div className="input-group">
          <AiOutlineMail />
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="input-group">
          <MdOutlineLock />
          <input type="password" placeholder="Senha" />
        </div>
        <button type="submit">Entrar</button>
      </LoginForm>
    </LoginContainer>
  );
}
