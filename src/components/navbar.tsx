import Image from "next/image";
import logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="w-16 h-10 flex-center">
          <Image src={logo} alt="logo" width={24} height={24} />
        </div>
        <div className="w-32 h-10 bg-black text-white font-bold border-black rounded-3xl flex-center">
          Home
        </div>
        <div className="w-20 h-10 font-bold flex-center">Create</div>
        <div className="w-full rounded-3xl bg-slate-400 flex items-center ">search</div>
        <div>chat</div>
        <div>dropdown</div>
      </div>
    </>
  );
};

export default Navbar;
