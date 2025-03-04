import { Truck } from 'react-bootstrap-icons';
import { Headset } from 'react-bootstrap-icons';
import { ShieldCheck } from 'react-bootstrap-icons';

const spheres = [
    {
        icon: Truck, 
        title: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
    },
    {
        icon: Headset,
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support"
    },
    {
        icon: ShieldCheck,
        title: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days"
    }
];

const Feature = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full">
                <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full text-white">
                    <Icon size={28} /> 
                </div>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className=" text-sm">{description}</p>
        </div>
    );
};

export default function FeaturesSection() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-12 p-8">
            {spheres.map((item, index) => (
                <Feature key={index} {...item} />
            ))}
        </div>
    );
}