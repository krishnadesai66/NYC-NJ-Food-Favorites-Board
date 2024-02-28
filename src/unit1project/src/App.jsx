import Post from './components/Board';
import './App.css';

function App() {

  const restaurant = [
    {
      name: 'Dehli Garden',
      cuisine: 'Indian',
      area: 'NJ',
      image: "./src/components/delhigarden.jpg",
      link:"https://delhigarden.wixsite.com/delhigarden"
    },
    {
      name: 'Jashan',
      cuisine: 'Indian',
      area: 'NJ',
      image: "./src/components/jashan.jpg",
      link:"https://www.jashannj.com/"
    },
    {
      name: "Ralph's",
      cuisine: 'Italian',
      area: 'NJ',
      image: "./src/components/ralphs.jpg",
      link:"https://ralphspizzeria.com/"
    },
    {
      name: 'Fat Cactus',
      cuisine: 'Mexican',
      area: 'NJ',
      image: "./src/components/fatcactus.jpg",
      link:"https://www.fatcactuscantina.com/"
    },
    {
      name: 'Karma Kafe',
      cuisine: 'Indian',
      area: 'NJ',
      image: "./src/components/karmakafe.jpg",
      link:"http://www.karmakafe.com/"
    },
    {
      name: 'Sakana',
      cuisine: 'Japanese',
      area: 'NJ',
      image: "./src/components/sakana.jpg",
      link:"https://www.sakananewbrunswick.com/"
    }, 
    {
      name: 'Uva',
      cuisine: 'Italian',
      area: 'NYC',
      image: "./src/components/uva.jpg",
      link:"https://www.uvanyc.com/"
    },
    {
      name: 'Tacoria',
      cuisine: 'Mexican',
      area: 'NJ',
      image: "./src/components/tacoria.jpg",
      link:"https://tacoria.com/"
    },
    {
      name: 'Cucina 355',
      cuisine: 'Italian',
      area: 'NJ',
      image: "./src/components/cucina.jpg",
      link:"https://cucina355.com/nutley-cucina-355-food-menu"
    },
    {
      name: 'Ramen Nagomi',
      cuisine: 'Japanese',
      area: 'NJ',
      image: "./src/components/ramennagomi.jpg",
      link:"https://www.ramennagomi.com/"
    },
    {
      name: 'Cacio E Pepe',
      cuisine: 'Italian',
      area: 'NYC',
      image: "./src/components/cacio.jpg",
      link:"https://cacioepepe.com/"
    },
    {
      name: 'Tadka',
      cuisine: 'Indian',
      area: 'NJ',
      image: "./src/components/tadkap.jpg",
      link:"https://tadkafineindiancuisinenj.com/"
    },
    {
      name: "Margarita's Grill",
      cuisine: 'Mexican',
      area: 'NJ',
      image: "./src/components/margs.jpeg",
      link:"https://margaritas-mexican-griil.business.site/"
    }

  ]

  return (
    <>
    <div className='header'>
      <h1>NYC/NJ Food Favorites!</h1>
      <h2>Here are my food favorites in the NYC/NJ area...</h2>
    </div>

      {
        restaurant.map((restaurant, i) => {
          return (<Post 
            name={restaurant.name} 
            key={i}
            cuisine={restaurant.cuisine} 
            area={restaurant.area} 
            image = {restaurant.image}
            link = {restaurant.link}
            />)

        })
      }

    </>
  )
}

export default App