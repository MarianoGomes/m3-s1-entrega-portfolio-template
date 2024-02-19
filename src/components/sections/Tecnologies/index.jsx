import style from "./style.module.css"
import {technologies} from "../../../data/technologies.js"
import {ProductItem} from "./ProductItem"

export const Tecnologies = () => {
    return (
        <section className={style.section}>
            <h2 className="title2">Tecnologias</h2>    
            <ul className={style.listaTech}>

                {technologies.map((tech) => (
                    <ProductItem tech={tech} />
                ))}

            </ul>
        </section>
    )
}