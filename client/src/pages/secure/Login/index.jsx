import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { LoginContainer, LoginForm } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/secure/solicitations');
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Erro de login',
          text: data.errors[0],
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Ocorreu um erro durante o login. Por favor, tente novamente.',
      });
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Logo style={{ width: '100px', height: '100px' }} />
        <h1>Bem-vinda ao sistema</h1>
        <div className="input-group">
          <AiOutlineMail />
          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <MdOutlineLock />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </LoginForm>
    </LoginContainer>
  );
}
