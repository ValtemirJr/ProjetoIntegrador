import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ContactForm, Input, TextArea, SubmitButton } from './styles';
import formatPhone from '../../../util/formatPhone';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [goal, setGoal] = useState('');

  const handlePhoneChange = (event) => {
    event.preventDefault();
    setPhonenumber(formatPhone(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phonenumber,
      goal,
    };

    fetch('http://localhost:3333/client/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro ao enviar sua solicitação! Verique os dados e tente novamente, todos são obrigatórios.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });

          throw new Error('Erro ao enviar solicitação');
        }
        return response.json();
      })
      .then(() => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua mensagem foi enviada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao enviar sua solicitação! Verique os dados e tente novamente, todos são obrigatórios. Caso o erro persista, entre em contato conosco por telefone ou e-mail.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });

    setName('');
    setEmail('');
    setPhonenumber('');
    setGoal('');
  };

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
