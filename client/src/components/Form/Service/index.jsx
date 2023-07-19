import React from 'react';
import Button from '../../Button';
import FormStyled from './styles';

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
          to="/secure/solicitations"
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
