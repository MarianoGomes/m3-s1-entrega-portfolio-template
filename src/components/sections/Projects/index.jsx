import gitIcon from "../../../assets/git-icon.png";
import {projects} from "../../../data/projects.js"
import style from "./style.module.css"

export const Projects = () => {
    return (
        <section className={style.section}>
            <div className={style.secName}>
                <h2 className="title2">Projetos</h2>
            </div>
            <ul className={style.ulProject}>
                {
                    projects.map((projects) => (
                  
                        <li>
                            <div className={style.testeira}>
                                <h3 className="title3">{projects.name}</h3>
                                <img src={gitIcon} alt="#" />
                            </div>
                            <div className={style.conteudo}>
                                <p className="paragraph">{projects.description}</p>
                                <a href="#">Saiba mais</a>                    
                            </div>
                        </li>
                        
                    ))

                }

            </ul>

        </section>
    )
}