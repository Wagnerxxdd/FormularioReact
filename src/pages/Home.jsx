import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <div id="home">
        <h1>
        Bem-vindo(a) à nossa pesquisa acadêmica sobre hábitos de estudo e preferências de aprendizado! 
        Sua participação é fundamental para entendermos melhor como podemos melhorar os recursos educacionais e 
        proporcionar uma experiência de aprendizado mais eficaz e agradável. Ao compartilhar seus insights conosco, 
        você estará contribuindo significativamente para o avanço da educação.
        </h1>
        <br />
        <br />
        <button>
          <a href="/forms">Começar</a>
        </button>
      </div>
    </div>
  );
}
