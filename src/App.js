// import Section from "./components/Section/Section.js";
import ProductCard from "./components/ProductCard/ProductCard.js";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Headphones",
      image:
        "https://i.pinimg.com/736x/76/9d/84/769d8454f78dabe81ec54e51fea6d156.jpg",
      description:
        "Experience powerful sound like never before. These headphones deliver deep bass, crystal-clear audio, and all-day comfort. Designed for music lovers, gamers, and professionals who want immersive sound without distractions. ",
      price: 79.99,
      onsale: true,
      saleprice: 59.99,
    },
    {
      id: 2,
      name: "Laptop",
      image:
        "https://i.pinimg.com/1200x/ae/3a/68/ae3a6814a39b340118ec4306e6fbe1bc.jpg",
      description:
        "Power meets performance. This laptop delivers fast processing, smooth multitasking, and a sleek design—perfect for work, study, and entertainment on the go.",
      price: 799,
      onsale: false,
    },
    {
      id: 3,
      name: "PS5",
      image:
        "https://i.pinimg.com/736x/3c/35/b5/3c35b58376bcdee247b11587bd67434f.jpg",
      description:
        "Experience next-gen gaming with PlayStation 5. Lightning-fast loading, stunning graphics, and immersive gameplay bring your favorite games to life like never before.",
      price: 499,
      onsale: true,
      saleprice: 399,
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Showcase Products</h1>
        <p> </p>
      </header>
      <main className="product-grid">
        {/* <Section title="Our Products"> */}
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {/* </Section> */}
      </main>
    </div>
  );
}

export default App;
