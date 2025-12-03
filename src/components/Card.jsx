import './Card.css'
import Icon from './Icon';

export default function Card({ image, title, country,icon }) {
  return (
    <div className='cardRecipe'>
      <img src={image} alt={title} className="cardRecipe-img" />
      
      <h3 className="cardRecipe-title">{title}</h3>
      <img  className="icon1" src="../public/photo/food-tray.png" alt="" />
      <p className="cardRecipe-country">
        {country}
            <Icon country={country} />
      </p>
      <button className='btn'> details</button>
    </div>
  );
}

