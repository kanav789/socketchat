import { BsPinAngleFill } from 'react-icons/bs';

const ListChats = () => {
    const dummyChats = [
        {
            id: 1,
            name: "John Doe",
            lastMessage: "Hey! How are you doing?",
            time: "12:30 PM",
            avatar: "https://i.pravatar.cc/150?img=1",
            isPinned: true
        },
        {
            id: 2,
            name: "Jane Smith",
            lastMessage: "Thanks for the help yesterday!",
            time: "11:45 AM",
            avatar: "https://i.pravatar.cc/150?img=5",
            isPinned: false
        },
        {
            id: 3,
            name: "Team Project",
            lastMessage: "Meeting at 3 PM tomorrow",
            time: "10:20 AM",
            avatar: "https://i.pravatar.cc/150?img=8",
            isPinned: true
        },
        {
            id: 4,
            name: "Sarah Wilson",
            lastMessage: "See you later!",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=9",
            isPinned: false
        },
        {
            id: 5,
            name: "Mike Johnson",
            lastMessage: "Can you send me the files?",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=12",
            isPinned: false
        }, {
            id: 1,
            name: "John Doe",
            lastMessage: "Hey! How are you doing?",
            time: "12:30 PM",
            avatar: "https://i.pravatar.cc/150?img=1",
            isPinned: true
        },
        {
            id: 2,
            name: "Jane Smith",
            lastMessage: "Thanks for the help yesterday!",
            time: "11:45 AM",
            avatar: "https://i.pravatar.cc/150?img=5",
            isPinned: false
        },
        {
            id: 3,
            name: "Team Project",
            lastMessage: "Meeting at 3 PM tomorrow",
            time: "10:20 AM",
            avatar: "https://i.pravatar.cc/150?img=8",
            isPinned: true
        },
        {
            id: 4,
            name: "Sarah Wilson",
            lastMessage: "See you later!",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=9",
            isPinned: false
        },
        {
            id: 5,
            name: "Mike Johnson",
            lastMessage: "Can you send me the files?",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=12",
            isPinned: false
        }, {
            id: 1,
            name: "John Doe",
            lastMessage: "Hey! How are you doing?",
            time: "12:30 PM",
            avatar: "https://i.pravatar.cc/150?img=1",
            isPinned: true
        },
        {
            id: 2,
            name: "Jane Smith",
            lastMessage: "Thanks for the help yesterday!",
            time: "11:45 AM",
            avatar: "https://i.pravatar.cc/150?img=5",
            isPinned: false
        },
        {
            id: 3,
            name: "Team Project",
            lastMessage: "Meeting at 3 PM tomorrow",
            time: "10:20 AM",
            avatar: "https://i.pravatar.cc/150?img=8",
            isPinned: true
        },
        {
            id: 4,
            name: "Sarah Wilson",
            lastMessage: "See you later!",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=9",
            isPinned: false
        },
        {
            id: 5,
            name: "Mike Johnson",
            lastMessage: "Can you send me the files?",
            time: "Yesterday",
            avatar: "https://i.pravatar.cc/150?img=12",
            isPinned: false
        }
    ];

    return (
        <div className="px-3">
            <h2 className="text-xl font-semibold mb-4">List of Chats</h2>

            {/* map through chats */}
            <div className="space-y-2">
                {dummyChats.map((chat) => (
                    <div 
                        key={chat.id}
                        className="w-full border-gray-300 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            {/* avatar and name */}
                            <div className="flex items-center gap-3 flex-1">
                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                    <img 
                                        src={chat.avatar} 
                                        alt={chat.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* chat name and last message */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                                </div>
                            </div>
                            
                            {/* date and pin */}
                            <div className="flex flex-col items-end gap-1 ml-2">
                                <span className="text-xs text-gray-500">{chat.time}</span>
                                {chat.isPinned && (
                                    <BsPinAngleFill className="text-gray-600 text-sm" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListChats;