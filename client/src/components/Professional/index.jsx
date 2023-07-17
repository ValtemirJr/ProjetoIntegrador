import React from 'react';

export default function Professional({ photo, name, subtitle, text }) {
  return (
    <div>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{subtitle}</p>
      <p>{text}</p>
    </div>
  );
}
