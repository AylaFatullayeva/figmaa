import Star from "./Card"

const ProductCard = ({product}) => {
  return (
    <div className="relative border p-4 rounded-lg">
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-2 rounded">
        {product.discount}
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="h-60 w-60"
      />

      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>

      <p className="text-red-500 font-bold">
        {product.price}{" "}
        <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
      </p>

      <div className="flex items-center mt-2 text-gray-400">
        <Star number={product.rating}/>
     ({product.reviews})
      </div>
    </div>
  );
};

export default ProductCard;
