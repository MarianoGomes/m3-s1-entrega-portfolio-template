import gitIcon from "../../../assets/git-icon.png";
import {projects} from "../../../data/projects.js"

export const Projects = () => {
    return (
        <section>
            <h2 className="title2">Projetos</h2>
            <ul>
                
                {
                technologies.map((projects) => (
                    const { name, description } = projects;
                    return (
                        <li>
                            <div>
                                <h3 className="title3">Projeto 1</h3>
                                <img src={gitIcon} alt="#" />
                            </div>
                            <div>
                                <p className="paragraph">Descrição do Projeto</p>
                                <a href="#">Saiba mais</a>                    
                            </div>
                        </li>
                    )
                ))
                }


            </ul>

        </section>
    )
}