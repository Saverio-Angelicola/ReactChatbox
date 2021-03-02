import { useState } from "react";
import { Redirect } from "react-router-dom";

function Connexion() {
  const [pseudo, setPseudo] = useState("");
  const [goToChat, setGoToChat] = useState(false);

  const handleChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGoToChat(true);
  };

  if (goToChat) {
    return <Redirect push to={`/pseudo/${pseudo}`}/>;
  }

  return (
    <div className="connexionBox" onSubmit={handleSubmit}>
      <form className="connexion">
        <input
          type="text"
          placeholder="pseudo"
          value={pseudo}
          onChange={handleChange}
          required
        />
        <button type="submit">GO</button>
      </form>
    </div>
  );
}
export default Connexion;
