import IntroVideo from "./IntroVideo";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-black px-5 py-4 fixed w-screen top-0 z-10 border-b-[0.25px] border-gray-700 ">
      <div className="flex items-center justify-between sm:mx-10">
        <Logo />
        <IntroVideo />
      </div>
    </header>
  );
}

export default Header;
