import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg",
    rating: 4.6
  },
  {
    id: 2,
    name: "ramen",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Original_Ramen.jpg/440px-Original_Ramen.jpg",
    rating: 5.0
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id}
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
