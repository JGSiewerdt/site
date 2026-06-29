import Link from "next/link"

    export default function Navbar() {
      return (

    <nav className="bg-white sticky w-full top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <img src="/ufsc.png" className="h-19" alt="" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Guia turístico para Floripa</span>

      
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link href="/" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent" >Home</Link>
            </li>
            <li>
              <Link href="/praias" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Praias</Link>
            </li>
            <li>
              <Link href="/gastronomia" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Gastronomia</Link>
            </li>
            <li>
              <Link href="/cultura" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Cultura</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}