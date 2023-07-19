import React from 'react';
import Button from '../../Button';
import FormStyled from './styles';

// Componente de formulário para cadastro e atualização de serviços
// Recebe como props o objeto serviço com os dados vindos
// do banco de dados,
// a função para lidar com a mudança de dados nos inputs,
// a função para lidar com o envio do formulário
// e a função para lidar com o cancelamentodo envio do formulário.
function ServiceForm({
  service,
  handleInputChange,
  handleSubmit,
  handleCancel,
}) {
  return (
    <FormStyled>
      <div className="input__group">
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={service.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="service_type_id">Tipo de Serviço:</label>
        <input
          type="text"
          id="service_type_id"
          name="service_type_id"
          value={service.service_type_id}
          onChange={handleInputChange}
        />
      </div>
      <div className="input__group">
        <label htmlFor="price">Preço:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={service.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="button__group">
        <Button type="submit" className="button__crud" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button
          type="button"
          to="/secure/services"
          onClick={handleCancel}
          className="button__cancel"
        >
          Cancelar
        </Button>
      </div>
    </FormStyled>
  );
}

export default ServiceForm;
