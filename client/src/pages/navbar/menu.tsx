import { IoChatbubbles } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 flex justify-around items-center px-4 py-2 shadow-lg">
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors relative">
                <div className="relative">
                    <IoChatbubbles className="text-2xl" />
                    <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                        36
                    </span>
                </div>
                <span className="text-xs">Chats</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                <MdCall className="text-2xl" />
                <span className="text-xs">Calls</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                <IoLogoWhatsapp className="text-2xl" />
                <span className="text-xs">Updates</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                <FaTools className="text-2xl" />
                <span className="text-xs">Tools</span>
            </button>
        </div>
    )
}

export default Menu;