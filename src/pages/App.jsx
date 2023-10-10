import { useState } from "react";

import gitLogo from "../assets/github.png";

import Input from "../components/Input/Input";
import ItemRepo from "../components/ItemRepo/ItemRepo";

import { Container } from "./Styles";
import Button from "../components/Button/Button";

import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      } else {
        alert("Esse repositório já foi cadastrado!");
      }
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
    setCurrentRepo("");
  };

  return (
    <Container>
      <img
        src={gitLogo}
        width={72}
        height={72}
        alt="Logo do GitHub"
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          handleRemoveRepo={handleRemoveRepo}
          key={repo.id}
          repo={repo}
        />
      ))}
    </Container>
  );
}

export default App;
