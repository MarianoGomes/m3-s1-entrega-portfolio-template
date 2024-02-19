import logo from "../../assets/portfolio.png"
import style from "./style.module.css"

export const Header = () => {
  return (
    <header>
      <section className={style.section}>
        <img src={logo} alt="Logo da página" />
        <ul>
          <li><a href="">Sobre</a></li>
          <li><a href="">Stack</a></li>
          <li><a href="">Projetos</a></li>
        </ul>
        <button className="btn">Contato</button>
      </section>
    </header>
  );
};
