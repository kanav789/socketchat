import { IoSend } from 'react-icons/io5';
import { BsEmojiSmile, BsPaperclip } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const dummyMessages = [
        {
            id: 1,
            text: "Hey! How are you doing?",
            time: "10:30 AM",
            isSent: false
        },
        {
            id: 2,
            text: "I'm doing great! Thanks for asking.",
            time: "10:32 AM",
            isSent: true
        },
        {
            id: 3,
            text: "Want to grab coffee later?",
            time: "10:33 AM",
            isSent: false
        },
        {
            id: 4,
            text: "Sure! What time works for you?",
            time: "10:35 AM",
            isSent: true
        },
        {
            id: 5,
            text: "How about 3 PM at the usual place?",
            time: "10:36 AM",
            isSent: false
        },
        {
            id: 6,
            text: "Perfect! See you there 😊",
            time: "10:37 AM",
            isSent: true
        },
           {
            id: 1,
            text: "Hey! How are you doing?",
            time: "10:30 AM",
            isSent: false
        },
        {
            id: 2,
            text: "I'm doing great! Thanks for asking.",
            time: "10:32 AM",
            isSent: true
        },
        {
            id: 3,
            text: "Want to grab coffee later?",
            time: "10:33 AM",
            isSent: false
        },
        {
            id: 4,
            text: "Sure! What time works for you?",
            time: "10:35 AM",
            isSent: true
        },
        {
            id: 5,
            text: "How about 3 PM at the usual place?",
            time: "10:36 AM",
            isSent: false
        },
        {
            id: 6,
            text: "Perfect! See you there 😊",
            time: "10:37 AM",
            isSent: true
        },
           {
            id: 1,
            text: "Hey! How are you doing?",
            time: "10:30 AM",
            isSent: false
        },
        {
            id: 2,
            text: "I'm doing great! Thanks for asking.",
            time: "10:32 AM",
            isSent: true
        },
        {
            id: 3,
            text: "Want to grab coffee later?",
            time: "10:33 AM",
            isSent: false
        },
        {
            id: 4,
            text: "Sure! What time works for you?",
            time: "10:35 AM",
            isSent: true
        },
        {
            id: 5,
            text: "How about 3 PM at the usual place?",
            time: "10:36 AM",
            isSent: false
        },
        {
            id: 6,
            text: "Perfect! See you there 😊",
            time: "10:37 AM",
            isSent: true
        },
           {
            id: 1,
            text: "Hey! How are you doing?",
            time: "10:30 AM",
            isSent: false
        },
        {
            id: 2,
            text: "I'm doing great! Thanks for asking.",
            time: "10:32 AM",
            isSent: true
        },
        {
            id: 3,
            text: "Want to grab coffee later?",
            time: "10:33 AM",
            isSent: false
        },
        {
            id: 4,
            text: "Sure! What time works for you?",
            time: "10:35 AM",
            isSent: true
        },
        {
            id: 5,
            text: "How about 3 PM at the usual place?",
            time: "10:36 AM",
            isSent: false
        },
        {
            id: 6,
            text: "Perfect! See you there 😊",
            time: "10:37 AM",
            isSent: true
        }
    ];
  const navigate = useNavigate();
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-300 px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <button className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={()=> navigate("/")}>
                        <IoMdArrowBack className="text-2xl" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img 
                            src="https://i.pravatar.cc/150?img=1" 
                            alt="avatar" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">John Doe</h3>
                        <p className="text-xs text-gray-500">Online</p>
                    </div>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                    <HiDotsVertical className="text-xl" />
                </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {dummyMessages.map((message) => (
                    <div 
                        key={message.id}
                        className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-xs lg:max-w-md ${message.isSent ? 'bg-green-500 text-white' : 'bg-white text-gray-900'} rounded-lg px-4 py-2 shadow-sm`}>
                            <p className="text-sm">{message.text}</p>
                            <span className={`text-xs ${message.isSent ? 'text-green-100' : 'text-gray-500'} block text-right mt-1`}>
                                {message.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-300 px-4 py-3 flex items-center gap-2 shadow-lg">
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <BsEmojiSmile className="text-xl" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <BsPaperclip className="text-xl" />
                </button>
                <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors cusrsor-pointer">
                    <IoSend className="text-xl" />
                </button>
            </div>
        </div>
    )
}

export default Chat;