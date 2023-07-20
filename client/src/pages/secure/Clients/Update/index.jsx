import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PiUserList } from 'react-icons/pi';
import { Section } from './styles';
import ClientForm from '../../../../components/Form/Client';

// Página de edição de clientes
export default function ClientUpdate() {
  // Estado para armazenar os dados do cliente
  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',
    cpf: '',
    occupation: '',
    marital_status_id: '',
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
  // Hook para pegar os dados da URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // Guarda o ID do cliente dos parâmetros da URL
  const id = searchParams.get('id');

  // Função para buscar um cliente no backend
  const fetchClient = async (clientId) => {
    try {
      // Requisição para buscar um cliente no backend enviando o ID como parâmetro
      const response = await fetch(`http://localhost:3333/client/${clientId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Verificação de erro na requisição
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível carregar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      // Conversão dos dados para JSON
      const data = await response.json();
      // Armazenamento dos dados no estado
      setClient(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar o cliente.',
      });
    }
  };

  // Função para atualizar um cliente no backend
  const putClient = async (clientId, bodyData) => {
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
      // Requisição para atualizar um cliente enviando o ID como parâmetro
      const response = await fetch(`http://localhost:3333/client/${clientId}`, {
        method: 'PUT',
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
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível atualizar o cliente.',
        });
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Armazenamento dos dados no estado
      setClient(data);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cliente atualizado com sucesso.',
      });
      navigate('/secure/clients');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível atualizar o cliente.',
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

  // Função para enviar os dados do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    putClient(id, client);
  };

  // Função para atualizar os dados do cliente
  // no estado conforme o usuário digita no formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  // Renderiza os dados do cliente na página
  useEffect(() => {
    fetchClient(id);
  }, [id]);

  // Função para cancelar a edição e voltar para a página de listagem de clientes
  const handleCancel = () => {
    navigate('/secure/solicitations');
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: Number(value),
    }));
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
        Clientes - Editar
      </h1>
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
