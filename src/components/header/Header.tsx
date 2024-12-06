import Menu from "./Menu";
import Notif from "./Notif";
import Profile from "./Profile";
import Setting from "./Setting";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-2xl font-medium text-[#111111]">Just_Do_It</div>
      <div className="h-12 flex items-center gap-x-1">
        <Menu />
        <Setting />
        <Notif />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
