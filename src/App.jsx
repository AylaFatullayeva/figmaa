import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Text from "./components/Text";
import Card from './components/Card'
import Speaker from './components/Speaker'
import NewArrival from "./components/NewArrival";


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
      <div className=" min-h-screen p-6">
        <Speaker/>
      </div>
      <NewArrival />
    </div>
  );
};

export default App;
