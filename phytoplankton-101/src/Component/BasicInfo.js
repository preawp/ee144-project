// BasicInfo.js

import React from 'react';

function BasicInfo() {
  const phytoplanktonInfo = [
    {
      name: 'Diatoms',
      description: 'Diatoms are a major group of algae, and are among the most common types of phytoplankton.',
    },
    {
      name: 'Dinoflagellates',
      description: 'Dinoflagellates are a diverse group of single-celled organisms that are common in marine environments.',
    },
    // Add more information about different types of phytoplankton
  ];

  return (
    <div>
      <h2>Basic Information about Phytoplankton</h2>
      <ul>
        {phytoplanktonInfo.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicInfo;
