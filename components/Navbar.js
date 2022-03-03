import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Dropdown from "./DropDown"


const Navbar = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  return (
 
    <div className="flex bg-sky-500 w-screen h-20">
         <Dropdown/>
          <Link href="/" locale="mn">
            <a className="w-8 bg-green-500">Mn</a>
          </Link>
          <Link href="/" locale="en">
            <a className="w-8 bg-green-300">En</a>
          </Link>
          <Link href="/" locale="cn">
            <a className="w-8 bg-green-400">Cn</a>
          </Link>
    </div>
  );
};



export default Navbar;
