import { IoMdArrowBack, IoMdClose } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';
import { BsBellFill, BsShieldCheck } from 'react-icons/bs';
import { MdBlock, MdReport } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';

interface Member {
    id: number;
    name: string;
    phone: string;
    avatar: string;
    isAdmin?: boolean;
}

interface ChatDescriptionProps {
    isGroup?: boolean;
    onClose?: () => void;
}

const ChatDescription = ({ isGroup = true, onClose }: ChatDescriptionProps) => {
    // Dummy data for one-to-one chat
    const singleChatData = {
        name: "John Doe",
        phone: "+1 234 567 8900",
        avatar: "https://i.pravatar.cc/150?img=1",
        about: "Hey there! I am using WhatsApp",
        mediaCount: 127,
        mutedUntil: null
    };

    // Dummy data for group chat
    const groupChatData = {
        name: "Team Project",
        avatar: "https://i.pravatar.cc/150?img=8",
        description: "Project discussion and updates",
        createdBy: "Sarah Wilson",
        createdOn: "Jan 15, 2024",
        memberCount: 5,
        mediaCount: 89,
        members: [
            { id: 1, name: "Sarah Wilson", phone: "+1 234 567 8901", avatar: "https://i.pravatar.cc/150?img=9", isAdmin: true },
            { id: 2, name: "John Doe", phone: "+1 234 567 8900", avatar: "https://i.pravatar.cc/150?img=1", isAdmin: true },
            { id: 3, name: "Jane Smith", phone: "+1 234 567 8902", avatar: "https://i.pravatar.cc/150?img=5" },
            { id: 4, name: "Mike Johnson", phone: "+1 234 567 8903", avatar: "https://i.pravatar.cc/150?img=12" },
            { id: 5, name: "Emily Brown", phone: "+1 234 567 8904", avatar: "https://i.pravatar.cc/150?img=16" }
        ] as Member[]
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10">
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    <IoMdArrowBack className="text-2xl" />
                </button>
                <h2 className="text-lg font-semibold text-gray-900">
                    {isGroup ? 'Group Info' : 'Contact Info'}
                </h2>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    <IoMdClose className="text-2xl" />
                </button>
            </div>

            {/* Profile Section */}
            <div className="bg-white px-4 py-6 text-center border-b border-gray-200">
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mx-auto mb-4 relative">
                    <img
                        src={isGroup ? groupChatData.avatar : singleChatData.avatar}
                        alt="avatar"
                        className="w-full h-full object-cover"
                    />
                    {isGroup && (
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <HiUserGroup className="text-white text-4xl" />
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {isGroup ? groupChatData.name : singleChatData.name}
                </h3>
                {!isGroup && (
                    <p className="text-sm text-gray-500">{singleChatData.phone}</p>
                )}
                {isGroup && (
                    <p className="text-sm text-gray-500">
                        Group · {groupChatData.memberCount} participants
                    </p>
                )}
            </div>

            {/* About/Description Section */}
            {!isGroup && (
                <div className="bg-white px-4 py-4 mb-2">
                    <p className="text-xs text-gray-500 mb-2">ABOUT</p>
                    <p className="text-sm text-gray-900">{singleChatData.about}</p>
                </div>
            )}

            {isGroup && (
                <div className="bg-white px-4 py-4 mb-2">
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">DESCRIPTION</p>
                        <p className="text-sm text-gray-900">{groupChatData.description}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">CREATED BY</p>
                        <p className="text-sm text-gray-900">{groupChatData.createdBy} · {groupChatData.createdOn}</p>
                    </div>
                </div>
            )}

            {/* Media Section */}
            <div className="bg-white px-4 py-4 mb-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-900">Media, links, and docs</p>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            {isGroup ? groupChatData.mediaCount : singleChatData.mediaCount}
                        </span>
                        <span className="text-gray-400">›</span>
                    </div>
                </div>
            </div>

            {/* Group Members Section */}
            {isGroup && (
                <div className="bg-white px-4 py-4 mb-2">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-500">{groupChatData.memberCount} participants</p>
                        <button className="text-green-600 hover:text-green-700">
                            <FaUserPlus className="text-xl" />
                        </button>
                    </div>
                    <div className="space-y-3">
                        {groupChatData.members.map((member) => (
                            <div key={member.id} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-medium text-gray-900 truncate">
                                            {member.name}
                                        </h4>
                                        {member.isAdmin && (
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                                Admin
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">{member.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Actions Section */}
            <div className="bg-white px-4 py-2 mb-2">
                <button className="w-full flex items-center gap-3 py-3 text-gray-900 hover:bg-gray-50 rounded transition-colors">
                    <BsBellFill className="text-xl text-gray-600" />
                    <span className="text-sm">Mute notifications</span>
                </button>
                {!isGroup && (
                    <button className="w-full flex items-center gap-3 py-3 text-gray-900 hover:bg-gray-50 rounded transition-colors">
                        <BsShieldCheck className="text-xl text-gray-600" />
                        <span className="text-sm">Encryption</span>
                    </button>
                )}
            </div>

            {/* Danger Zone */}
            <div className="bg-white px-4 py-2 mb-20">
                {isGroup ? (
                    <>
                        <button className="w-full flex items-center gap-3 py-3 text-red-600 hover:bg-red-50 rounded transition-colors">
                            <IoExitOutline className="text-xl" />
                            <span className="text-sm">Exit group</span>
                        </button>
                        <button className="w-full flex items-center gap-3 py-3 text-red-600 hover:bg-red-50 rounded transition-colors">
                            <MdReport className="text-xl" />
                            <span className="text-sm">Report group</span>
                        </button>
                    </>
                ) : (
                    <>
                        <button className="w-full flex items-center gap-3 py-3 text-red-600 hover:bg-red-50 rounded transition-colors">
                            <MdBlock className="text-xl" />
                            <span className="text-sm">Block</span>
                        </button>
                        <button className="w-full flex items-center gap-3 py-3 text-red-600 hover:bg-red-50 rounded transition-colors">
                            <MdReport className="text-xl" />
                            <span className="text-sm">Report contact</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ChatDescription;