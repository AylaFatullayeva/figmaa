
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <ul className="flex gap-6">
        <li className="font-medium text-gray-600 cursor-pointer hover:text-black">Home</li>
        <li className="font-medium text-gray-600 cursor-pointer hover:text-black">Contact</li>
        <li className="font-medium text-gray-600 cursor-pointer hover:text-black">About</li>
        <li className="font-medium text-gray-600 cursor-pointer hover:text-black">Sign Up</li>
      </ul>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border p-2 rounded-md text-sm w-64"
        />
      </div>
    </nav>
  );
};

export default Navbar;

