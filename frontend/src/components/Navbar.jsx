import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
<header className="bg-base-300 border-b border-base-content/10 shadow-[0_2px_10px_rgba(109,60,255,0.15)]">
<div className="mx-auto max-w-6xl p-4">
<div className="flex items-center justify-between">
          
 {/* Gradient Title   */}
  <h1 className="text-3xl font-extrabold font-mono tracking-tight 
      bg-gradient-to-r from-[#6d3cff] via-[#8b5cf6] to-[#22c55e] 
      bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(109,60,255,0.3)]"> NotesBoard
  </h1>

  {/* Gradient Button */}
  <div className="flex items-center gap-4">
  <Link
  to={"/create"}
  className="btn rounded-full border-none text-white bg-gradient-to-r from-[#6d3cff] to-[#22c55e]
  hover:from-[#22c55e] hover:to-[#6d3cff] shadow-[0_0_15px_rgba(109,60,255,0.4)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
  transition-all duration-300">
  <PlusIcon className="size-5" />
  <span>New Note</span>
  </Link>
  </div>
  </div>
  </div>
    </header>
  );
};

export default Navbar;