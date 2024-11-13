import { GiFamilyHouse } from "react-icons/gi";
export default function Navbar() {
  return (
    <>
      <div className="flex items-center space-x-2">
        <GiFamilyHouse className="text-blue-600 text-4xl" />
        <span className="text-2xl font-bold text-gray-600">zillow</span>
      </div>
    </>
  );
}
