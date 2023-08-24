import React, { useState } from "react";

function ToyForm({addToy}) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    likes: 0
  })
  
  function handleSubmit(e) {
    e.preventDefault();
    addToy(form);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value

    })
    
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
