
const Header = (props) => {
  const handleSubmit = (e) => {
   // para não atualizar a pagina ao enviar o submit
    e.preventDefault();

    // para pegar o valor do input
    const searchValue = e.target[0].value;

    // pegando o ação submit
    props.onSubmit(searchValue);

    // para limpar o valor do input
    e.target[0].value = ""; 
    
  }

  return (
    <div className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por Filmes" />
      </form>
    </div>
  )
}

export default Header
