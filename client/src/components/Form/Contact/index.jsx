import React, { useState } from 'react';
import { ContactForm, Input, TextArea, SubmitButton } from './styles';
import formatPhone from '../../../util/formatPhone';

export default function Contact() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (event) => {
    event.preventDefault();
    setPhone(formatPhone(event.target.value));
  };

  return (
    <ContactForm>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="E-mail" />
      <Input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <TextArea
        className="section-contact__textarea"
        placeholder="Digite como podemos lhe ajudar e que objetivos deseja alcançar aqui..."
      />
      <SubmitButton className="section-contact__button" type="submit">
        Enviar
      </SubmitButton>
    </ContactForm>
  );
}
