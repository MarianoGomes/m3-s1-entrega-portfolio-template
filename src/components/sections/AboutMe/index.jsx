import style from "./style.module.css"

const class1 =  "title2"

export const AboutMe = () => {
  return (
    <section className={style.secAboutMe}>
      <h2 className={style.customTitle2 + ' ' +class1}>Sobre mim</h2>
      <p className="paragraph">A doutrina de Lacan sobre o RSI diz que a nossa subjetivação vela a enunciação que termina por transformar o objeto em uma instância paranóica. 
      O incentivo ao avanço tecnológico, assim como o consenso sobre a necessidade de qualificação representa uma abertura para a melhoria dos níveis de motivação departamental. Feito no gerador de lero lero;
      </p>
    </section>
  );
};