"use client"
import { cx } from "@/src/utils"
import Link from "next/link"
import { useState } from "react"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { DribbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../icons"
import Logo from "./Logo"

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className=" mr-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        <div>
            <a href="https://example.com" className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href="https://example.com" className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href="https://example.com" className="inline-block w-6 h-6 mr-4"><DribbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href="https://example.com" className="inline-block w-6 h-6 mr-4 bg-light rounded-full"><GithubIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        </div>
    </header>
  )
}

export default Header