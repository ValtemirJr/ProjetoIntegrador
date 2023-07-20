import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ContactForm, Input, TextArea, SubmitButton } from './styles';
import formatPhone from '../../../util/formatPhone';

// Componente de formulário para contato
export default function Contact() {
  // Estados para os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [goal, setGoal] = useState('');

  // Função para lidar com a mudança de dados nos inputs
  const handlePhoneChange = (event) => {
    event.preventDefault();
    setPhonenumber(formatPhone(event.target.value));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phonenumber,
      goal,
      nacionality_id: null,
    };

    // Envia os dados do formulário para o backend
    fetch('http://localhost:3333/client/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Verifica se a resposta da requisição é ok
        if (!response.ok) {
          // Caso não seja, exibe um alerta de erro
          Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro ao enviar sua solicitação! Verique os dados e tente novamente, todos são obrigatórios.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });

          throw new Error('Erro ao enviar solicitação');
        }
        // Caso seja, retorna a resposta em json
        return response.json();
      })
      // Caso a resposta seja retornada, exibe um alerta de sucesso
      .then(() => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua mensagem foi enviada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      })
      // Caso ocorra algum erro, exibe um alerta de erro
      .catch(() => {
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao enviar sua solicitação! Verique os dados e tente novamente, todos são obrigatórios. Caso o erro persista, entre em contato conosco por telefone ou e-mail.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });

    // Limpa os dados do formulário
    setName('');
    setEmail('');
    setPhonenumber('');
    setGoal('');
  };

  // Retorna o formulário de contato com os inputs e botão de envio
  return (
    <ContactForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Telefone"
        value={phonenumber}
        onChange={handlePhoneChange}
      />
      <TextArea
        className="section-contact__textarea"
        placeholder="Digite como podemos lhe ajudar e que objetivos deseja alcançar aqui..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <SubmitButton className="section-contact__button" type="submit">
        Enviar
      </SubmitButton>
    </ContactForm>
  );
}
