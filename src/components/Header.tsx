const Header = () => {
  return (
    <div className="flex bg-neutral-700 items-center justify-between px-4 py-2 fixed top-0 left-0 right-0">
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-3 h-3 rounded-full"></div>
        <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
        <div className="bg-green-500 w-3 h-3 rounded-full"></div>
      </div>

      <div>
        <p className="text-xs">visitor@Dodis-MacBook-Air</p>
      </div>

      <div></div>
    </div>
  );
};

export default Header;
