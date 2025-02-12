import Image from 'next/image';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, PinterestOutlined } from "@ant-design/icons";

export default function AppFooter() {
  return (
    <footer className="bg-gray-50 p-8 text-center border-t border-gray-300">
      
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-gray-800">
          <PinterestOutlined style={{ fontSize: "24px" }} />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800">
          <InstagramOutlined style={{ fontSize: "24px" }} />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800">
          <TwitterOutlined style={{ fontSize: "24px" }} />
        </a>
        <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800">
          <FacebookOutlined style={{ fontSize: "24px" }} />
        </a>
      </div>

      <div className="flex justify-center items-center mb-4">
        <Image src={"/images/logo.png"} alt='' width={100} height={100} />
      </div>

      <p className="text-gray-600">info@loremipsum.com</p>

      <p className="mt-4 text-gray-500">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum
      </p>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <p className="text-gray-500 text-sm">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem Ipsum
        </p>
      </div>
    </footer>
  );
}
