import { Home, Briefcase, Share2, MessageCircle, Bell } from 'lucide-react';

export default function SubNavbar() {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Services', icon: Briefcase },
    { name: 'Network', icon: Share2 },
    { name: 'Messaging', icon: MessageCircle },
    { name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="w-full bg-gray-900 py-3 shadow-md mt-16">
      <div className="max-w-5xl mx-auto flex justify-center space-x-8 sm:space-x-6 md:space-x-8 px-2 sm:px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="flex flex-col items-center text-white hover:text-blue-400 transition duration-300 transform hover:-translate-y-1"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mb-0.5 sm:mb-1" />
              <span className="text-[10px] sm:text-xs md:text-sm">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
