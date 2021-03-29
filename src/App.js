const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg"
  },
  {
    id: 2,
    name: "ramen",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Original_Ramen.jpg/440px-Original_Ramen.jpg"
  }
];

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
