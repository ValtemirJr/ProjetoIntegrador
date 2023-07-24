import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../../../components/Section';
import Button from '../../../components/Button';

// Página de Política de Privacidade
export default function PrivacyPolicy() {
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Section className="section-privacy-policy-container">
      <div className="section-privacy-policy">
        <h2>Política de Privacidade</h2>
        <p>
          A sua privacidade é importante para nós. É política do CETAC respeitar
          a sua privacidade em relação a qualquer informação sua que possamos
          coletar no site <Link to="/">CETAC Web</Link>. Nesta Política de
          Privacidade, explicamos quais tipos de informações são coletadas, como
          e por que as informações são coletadas e como as utilizamos. Ao
          acessar nosso site e utilizar nossos serviços, você concorda com as
          práticas descritas nesta política.
        </p>
        <p>
          Esta política se aplica somente ao site CETAC. Ela não se aplica a
          informações coletadas offline ou por outros canais, nem a sites de
          terceiros vinculados ao nosso site.
        </p>

        <h3>Informações que Coletamos</h3>
        <p>
          Podemos coletar diferentes tipos de informações, incluindo informações
          pessoais que você nos fornece voluntariamente, como seu nome, endereço
          de e-mail, número de telefone, e outras informações que você insere em
          nosso site quando preenche um formulário de contato.
        </p>

        <h3>Como Utilizamos as Informações</h3>
        <p>
          As informações que coletamos podem ser utilizadas para os seguintes
          propósitos:
        </p>
        <ul>
          <li>
            Responder a solicitações de informações ou suporte enviadas por
            você;
          </li>
          <li>Analisar e melhorar o desempenho e a funcionalidade do site;</li>
          <li>Prevenir atividades fraudulentas, abusivas ou ilegais;</li>
          <li>
            Garantir a segurança e proteção do nosso site e dos nossos usuários.
          </li>
        </ul>
        <Button
          onClick={handleGoBack}
          className="section-button__privacy-policy"
        >
          Voltar para a página anterior
        </Button>
      </div>
    </Section>
  );
}
