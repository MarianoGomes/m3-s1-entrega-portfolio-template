import imgpc from "../../../assets/banner-img.png";
import style from "./style.module.css"
import {username} from "../../../data/user"



export const BannerSection = () => {
    return (
        <section className={style.section}>
            <div className={style.textarea}>
                <h3 className={style.nameUser}>{username}</h3>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className={style.text} >Hoje vamos "codar" ou modelar em 3D?</p>
                <button className="btn">Saiba mais</button>
            </div>

            <img src={imgpc} alt="imagem de uma tela de computador com traços representando linhas de código" /> 
        </section>
    )
}