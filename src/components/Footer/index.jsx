import style from "./style.module.css"
import whtap from "../../assets/whatsapp-icon.png";
import linkd from "../../assets/linkedin-icon.png";
import githb from "../../assets/github-icon.png";
import {user} from "../../data/user"

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <h2 className="title2">Contato</h2>
        <ul className={style.contatos}>
          <li><a href="tel:+5591981460468"><img src={whtap} alt="Meu Whatsapp" /></a></li>
          <li><a href="https://www.linkedin.com/in/mariano-gomes/"><img src={linkd} alt="Meu LinkedIn" /></a></li>
          <li><a href="https://github.com/MarianoGomes/"><img src={githb} alt="Meu Git Hub" /></a></li>
        </ul>
      </div>
      <div className={style.right}>
        <p>Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  );
};
