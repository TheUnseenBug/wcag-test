import "./App.css";
import Menues from "./menu";

function App() {
  return (
    <>
      <header className="p-5 text-white bg-amber-500 ">
        <nav className="flex flex-wrap items-center justify-center w-full gap-2 lg:gap-5">
          <a
            role="NavigationOption"
            href=""
            className="text-sm lg:p-2 md:text-xl focus:text-red-500 focus:outline-dotted focus:outline-green-500 outline-offset-4 outline-4 hover:text-red-500"
          >
            Home
          </a>
          <a
            role="NavigationOption"
            href=""
            className="text-sm lg:p-2 md:text-xl focus:text-red-500 focus:outline-dotted focus:outline-green-500 outline-offset-4 outline-4"
          >
            Product
          </a>
          <a
            role="NavigationOption"
            href=""
            className="text-sm lg:p-2 md:text-xl focus:text-red-500 focus:outline-dotted focus:outline-green-500 outline-offset-4 outline-4"
          >
            About us
          </a>
          <a
            role="NavigationOption"
            href=""
            className="text-sm lg:p-2 md:text-xl focus:text-red-500 focus:outline-dotted focus:outline-green-500 outline-offset-4 outline-4"
          >
            Contact us
          </a>
          <Menues />
        </nav>
      </header>

      <main>
        <section>
          <img
            src="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>Heading</h1>
          <button className=" py-2.5 px-5 text-lg bg-amber-500 text-white focus:outline-dotted focus:outline-green-500 outline-offset-2 outline-4 rounded-lg  hover:text-slate-200">
            Click me!
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
