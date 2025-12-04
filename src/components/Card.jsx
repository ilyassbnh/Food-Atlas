import './Card.css'
import Icon from './Icon';
import { useNavigate } from "react-router-dom";
export default function Card({ image, title, country,icon ,id}) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/recipes/${id}`);
  };
  return (
    <div className='cardRecipe'>
      <img src={image} alt={title} className="cardRecipe-img" />
      
      <h3 className="cardRecipe-title">{title}</h3> 

      <img  className="icon1" src="../public/photo/food-tray.png" alt="" />
      <p className="cardRecipe-country">
        {country}
            <Icon className="flag" country={country} />
      </p>
      <button className='btn' onClick={goToDetails}> details</button>
    </div>
  );
}

