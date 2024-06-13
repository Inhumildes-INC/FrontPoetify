// pages/login.js

import { useState, useEffect } from 'react';

export default function Login() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/api/options');
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario y obtener el ID de la opción seleccionada
    const selectedId = options.find(option => option.name === selectedOption)?.id;
    console.log('Selected ID:', selectedId);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="options">Options:</label>
        <select id="options" value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.id} value={option.name}>{option.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
