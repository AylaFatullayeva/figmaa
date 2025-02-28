const categories = [
  "Womans Fashion",
  "Mens Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Babys & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar = () => {
  return (
    <div className="w-64 p-6 border-r">
      <ul className="space-y-4">
        {categories.map((category, info) => (
          <li key={info} className="text-gray-600 cursor-pointer hover:text-black">
            {category} {category.includes("Fashion")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
