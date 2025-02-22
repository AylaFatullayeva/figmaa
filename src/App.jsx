import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Text from "./components/Text";
import Card from './components/Card'


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Text />
      </div>
      <div className=" min-h-screen p-6">
        <Card/>
        </div>
    </div>
  );
};

export default App;
