import { ItemContainer } from "./Styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Visitar repositório
      </a>

      <a
        className="remove"
        onClick={handleRemove}
      >
        Remover da lista
      </a>
    </ItemContainer>
  );
};

export default ItemRepo;
