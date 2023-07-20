import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { LoginContainer, LoginForm } from './styles';

// Página de login
export default function Login() {
  // Estados para armazenar os dados do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para fazer login
  const handleLogin = async () => {
    try {
      // Requisição para fazer login
      const response = await fetch('http://localhost:3333/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Corpo da requisição com os dados do formulário
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Armazenar o token no localStorage para manter o usuário logado
        localStorage.setItem('token', data.token);
        // Redirecionar para a página de listagem de clientes
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
            autoComplete="on"
          />
        </div>
        <div className="input-group">
          <MdOutlineLock />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </LoginForm>
    </LoginContainer>
  );
}
