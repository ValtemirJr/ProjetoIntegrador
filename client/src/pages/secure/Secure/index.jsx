import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav/secure';
import Main from './styles';

// Componente de página privada que verifica o token no localStorage
export default function SecureHome() {
  const navigate = useNavigate();

  useEffect(() => {
    // Função para verificar o token no localStorage
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Se não houver token no localStorage, redirecionar para a página de login
        navigate('/secure/login'); // ou a página de sua escolha
        return;
      }

      try {
        // Fazer a requisição para verificar o token no backend
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/token/check`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          },
        );

        const data = await response.json();

        if (!data.valid) {
          // Se o token for inválido, redirecionar para a página de login
          navigate('/secure/login');
        }
      } catch (error) {
        // Em caso de erro na requisição, também redirecionar para a página de login
        navigate('/secure/login');
      }
    };

    // Chamar a função para verificar o token
    checkTokenValidity();
  }, []);

  return (
    <Main>
      <Nav />
      <Outlet />
    </Main>
  );
}
