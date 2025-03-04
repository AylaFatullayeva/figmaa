import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Text from "./components/Text";
import Card from './components/Card'
import Speaker from './components/Speaker'
import NewArrival from "./components/NewArrival";
import Features from "./components/Features";
import Login from "./components/Login";


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
      <NewArrival />
      <Features/>
    </div>
    <div className=" min-h-screen p-6">
      <Login/>
    </div>
    </div>
  );
};

export default App;
