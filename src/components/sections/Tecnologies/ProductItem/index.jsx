import style from "./style.module.css"

export const ProductItem = ({tech}) => {
  const { name, img } = tech;
  return (
      <li className={style.item}><img src={img} alt={name} />{name}</li>
  );
};
