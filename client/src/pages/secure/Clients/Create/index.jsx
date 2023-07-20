import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import { Section } from './styles';
import ClientForm from '../../../../components/Form/Client';

// Página de cadastro de clientes
export default function ClientCreate() {
  // Estado para armazenar os dados do cliente
  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',
    cpf: '',
    occupation: '',
    marital_status_id: null,
    literacy: '',
    address: '',
    date_birth: '',
    nacionality_id: null,
    goal: '',
    date_request: new Date(Date.now() - 3 * 60 * 60 * 1000).toUTCString(),
  });
  const [nacionality, setNacionality] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);

  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função para criar um cliente e enviar para o backend
  const createClient = async (bodyData) => {
    // Desestruturação dos dados do cliente
    const {
      name,
      email,
      phonenumber,
      cpf,
      occupation,
      marital_status_id,
      literacy,
      address,
      date_birth,
      nacionality_id,
      goal,
      date_request,
    } = bodyData;

    try {
      // Requisição para criar um cliente
      const response = await fetch('http://localhost:3333/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        // Corpo da requisição com os dados do cliente desestruturados
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          cpf,
          occupation,
          marital_status_id,
          literacy,
          address,
          date_birth,
          nacionality_id,
          goal,
          date_request,
        }),
      });
      // Verifica se a resposta da requisição é ok
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível criar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setClient(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cliente criado com sucesso.',
      });
      navigate('/secure/clients');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível criar o cliente.',
      });
    }
  };

  const fetchNacionality = async () => {
    try {
      const response = await fetch('http://localhost:3333/nacionality', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNacionality(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar as nacionalidades.',
      });
    }
  };

  const fetchMaritalStatus = async () => {
    try {
      const response = await fetch('http://localhost:3333/maritalStatus', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMaritalStatus(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar os estados civis.',
      });
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    createClient(client);
  };

  // Função para lidar com a mudança de dados nos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: Number(value),
    }));
  };

  // Função para lidar com o cancelamento do envio do formulário
  const handleCancel = () => {
    navigate('/secure/clients');
  };

  // Hook para carregar os dados do cliente
  useEffect(() => {
    fetchNacionality();
    fetchMaritalStatus();
  }, []);

  return (
    <Section>
      <h1>
        <PiUserList />
        Clientes - Cadastro
      </h1>
      {/*
        Formulário para cadastro de clientes
        Recebe como props o objeto cliente com os dados vindos
        e as funções para lidar com a mudança de dados.
      */}
      <ClientForm
        client={client}
        nacionality={nacionality}
        maritalStatus={maritalStatus}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleSelectChange={handleSelectChange}
      />
    </Section>
  );
}
