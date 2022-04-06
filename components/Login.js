import Image from "next/image";
import { useMoralis } from "react-moralis";


function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className ="bg-black relative">
          <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
            <button onClick={authenticate} className="bg-gray-500 rounded-lg p-5 font-bold animate-pulse">Login to Flys Alpha Chat</button>
          </div>

          <div className="w-full h-screen">
            <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
          </div>
        </div>
    );
}

export default Login;