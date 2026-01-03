import { useState } from "react";

const mockChats = [
    { id: 1, name: "John Doe", last: "Hey! How are you?" },
    { id: 2, name: "UI Team", last: "Meeting at 5 PM" },
    { id: 3, name: "Alex", last: "Let’s catch up 🚀" },
];

const Chat = () => {
    const [activeChat, setActiveChat] = useState(mockChats[0]);


    return (
        <div className="h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/3 bg-white border-r">
                <h2 className="p-4 font-bold text-xl">💬 Chats</h2>
                {mockChats.map((chat: any) => (
                    <div
                        key={chat.id}
                        onClick={() => setActiveChat(chat)}
                        className={`p-4 cursor-pointer hover:bg-gray-100 ${activeChat.id === chat.id ? 'bg-gray-200' : ''}`}
                    >
                        <h3 className="font-semibold">{chat.name}</h3>
                        <p className="text-sm text-gray-500">{chat.last}</p>
                    </div>
                ))}
            </div>


            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 bg-white border-b font-semibold">{activeChat.name}</div>
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                    <div className="bg-gray-200 p-3 rounded-xl w-fit">Hello 👋</div>
                    <div className="bg-indigo-500 text-white p-3 rounded-xl w-fit ml-auto">Hi there 😄</div>
                </div>
                <div className="p-4 bg-white flex gap-2 border-t">
                    <input placeholder="Type a message..." className="flex-1 border p-3 rounded-xl" />
                    <button className="bg-indigo-600 text-white px-6 rounded-xl">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;