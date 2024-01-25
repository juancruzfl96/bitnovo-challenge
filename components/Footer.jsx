import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex items-center mb-8">
      <p className="text-gray-300 text-xs mr-2">Powered by</p>
      <FontAwesomeIcon icon={faBitcoin} className="w-8 h-8 text-gray-300" />
      <p className="text-gray-300 font-bold text-xl">itnovo.</p>
      <p className="text-gray-300 mx-2">|</p>
      <p className="text-gray-300 text-sm">
        © 2022 Bitnovo. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
