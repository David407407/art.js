import Image from "next/image";
import { space } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#2D3440] min-h-screen contenedor">
      <div className="z-10 absolute w-full">
        <div className=" w-fit h-screen flex flex-col space-y-20 justify-center mx-auto px-10 py-8 rounded-lg">
          <h1 className={`${space.className} text-8xl text-center font-bold`}>Play.js</h1>

          <div className="flex justify-around gap-8">
            <button className="bg-[#28BFDB] text-2xl font-bold px-8 py-4 rounded shadow-md hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-[#28BFDB]">
              <Link href={'/sudoku'}>Sudoku</Link>
            </button>

            <button className="bg-[#28BFDB] text-2xl font-bold px-8 py-4 rounded shadow-md hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-[#28BFDB]">
              <Link href={'/gato'}>Gato y el Ratón</Link>
            </button>

            <button className="bg-[#28BFDB] text-2xl font-bold px-8 py-4 rounded shadow-md hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-[#28BFDB]">
              <Link href={'/wordle'}>Wordle</Link>
            </button>
          </div>
        </div>
        
      </div>
      
      <div className="bubbles blur-sm">
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 90 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 34 }}></span>
        <span style={{ '--i': 76 }}></span>
        <span style={{ '--i': 40 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 64 }}></span>
        <span style={{ '--i': 52 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 48 }}></span>
        <span style={{ '--i': 35 }}></span>
        <span style={{ '--i': 34 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 34 }}></span>
        <span style={{ '--i': 80 }}></span>
        <span style={{ '--i': 60 }}></span>
        <span style={{ '--i': 72 }}></span>
        <span style={{ '--i': 40 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 87 }}></span>
        <span style={{ '--i': 52 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 34 }}></span>
        <span style={{ '--i': 80 }}></span>
        <span style={{ '--i': 60 }}></span>
        <span style={{ '--i': 72 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 90 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 34 }}></span>
        <span style={{ '--i': 76 }}></span>
        <span style={{ '--i': 40 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 87 }}></span>
        <span style={{ '--i': 52 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 18 }}></span>
        
      </div>
    </main>
  );
}
