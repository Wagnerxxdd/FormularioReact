import React from "react";
import "../index.css";
import Nav from "./Nav";

export default function Forms() {
  return (
    <div>
      <div className="form-container">
        <Nav />
        <form id="survey-form">
          <h1 id="title">Formulario de Pesquisa Academica</h1>
          <p id="description">
            Por Favor Preencha Todos os Dados
          </p>

          <label for="name" id="name-label">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Digite seu nome"
          />
          <label for="email" id="email-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite seu email"
          />
          <label for="age" id="age-label">
            Idade:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="1"
            placeholder="Digite sua idade"
          ></input>

          <legend>Qual Nivel de Escolaridade:</legend>
          <select id="dropdown">
            <option value="basico">Ensino Basico</option>
            <option value="fundamental">Ensino Fundamental</option>
            <option value="medio">Ensino Medio</option>
            <option value="superior">Ensino Superior</option>
          </select>

          <fieldset>
            <legend>Escolha uma:</legend>
            <label>
              <input type="radio" name="size" value="pequeno" /> Apenas Estudo
            </label>
            <br />
            <label>
              <input type="radio" name="size" value="médio" /> Estudo e Trabalho Meio Periodo
            </label>
            <br />
            <label>
              <input type="radio" name="size" value="grande" /> Estudo e Trabalho Integral
            </label>
            <br />
          </fieldset>

          <fieldset>
            <legend>Escolha várias, sobre as tecnologias que você estuda:</legend>
            <label>
              <input type="checkbox" name="topping" value="front" />{" "}
              HTML/CSS/JS
            </label>
            <br />
            <label>
              <input type="checkbox" name="topping" value="dev" /> Python
            </label>
            <br />
            <label>
              <input type="checkbox" name="topping" value="dev" />{" "}
              Java
            </label>
            <br />
            <label>
              <input type="checkbox" name="topping" value="dev" />{" "}
              C/C++/C#
            </label>
            <br />
          </fieldset>

          <label for="comments">Comentários adicionais:</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Digite seus comentários"
          ></textarea>

          <label for="terms-and-conditions">
            <input
              class="inline"
              id="terms-and-conditions"
              type="checkbox"
              required
              name="terms-and-conditions"
            />
            Eu aceito os{" "}
            <a href="https://www.freecodecamp.org/news/terms-of-service/">
              termos e condições
            </a>
          </label>

          <button type="submit" id="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
