import React, { useState } from 'react';
 
function Examples() {
  const [name, setName] = useState('');
 
  const handleChange = (event) => {
    setName(event.target.value);
  };
 
  return (
    <div>
      <h2>Greetings</h2>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}
 
export default Examples;
