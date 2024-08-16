import React from "react";

function FormComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("フォームが送信されました！");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">送信</button>
    </form>
  );
}

export default FormComponent;