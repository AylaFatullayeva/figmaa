import ProductCard from "./ProductCard";
import Image1 from '../assets/consolepic.png'
import Image2 from '../assets/keyboardpic.png'
import Image3 from '../assets/tvpic.png'
import Image4 from '../assets/chairpic.png'

const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      discount: "-40%",
      rating: 5,
      reviews: 88,
      image: Image1,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: Image2,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: Image3,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      oldPrice: "$400",
      discount: "-25%",
      rating: 5,
      reviews: 99,
      image: Image4,
    },
  ];
  
  const Card = () => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex row-auto items-center gap-2">
        <div className="bg-red-500 rounded h-[35px] w-[20px]"></div>
        <p className="text-red-500 font-bold">Today's</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Flash Sales</h2>
        </div>
        <div className="relative mt-6">
          <div className="grid grid-cols-4 gap-6 overflow-hidden">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}  />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Card;