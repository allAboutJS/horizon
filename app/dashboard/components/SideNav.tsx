"use client";

import Logo from "../../components/Logo";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SideNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <aside
      className={`fixed md:sticky top-0 bottom-0 left-0 w-64 bg-white transform h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="px-4 flex flex-col gap-y-6 py-6 h-screen overflow-y-auto border-r border-r-zinc-300">
        {/* Close button for mobile */}
        <button className="md:hidden absolute top-4 right-4 text-gray-600" onClick={onClose}>
          ✕
        </button>

        <Logo />
        <SearchForm />
        <Nav />
        <div className="flex border-t border-gray-200 items-center gap-2 text-gray-800 py-1">
          <div className="h-4 w-4 rounded-sm rotate-45 bg-blue-800"></div>
          <div>
            <h3 className="text-sm font-semibold">Onah Victor</h3>
            <p className="text-xs font-light">victoronah.dev@gmail.com</p>
          </div>
          <button>
            <LogoutIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const links = navRef.current?.querySelectorAll("a");
    if (links) {
      const activeLink = Array.from(links).find((link) => new URL(link.href, window.location.href).pathname === pathname);
      links.forEach((link) => link.classList.remove("bg-blue-500", "text-white"));
      activeLink?.classList.add("bg-blue-500", "text-white");
    }
  }, [pathname]);

  return (
    <nav ref={navRef} className="text-sm flex-1">
      <ul>
        <li><NavItem href="/dashboard" Icon={HomeIcon} text="Home" /></li>
        <li><NavItem href="/dashboard/banks" Icon={DollarIcon} text="My Banks" /></li>
        <li><NavItem href="/dashboard/transaction-history" Icon={ReceiptIcon} text="Transaction History" /></li>
        <li><NavItem href="/dashboard/payment-transfer" Icon={PaymentTransferIcon} text="Payment Transfer" /></li>
        <li><NavItem href="/dashboard/connect-bank" Icon={BankIcon} text="Connect Bank" /></li>
      </ul>
    </nav>
  );
}

function NavItem({ href, Icon, text }: { href: string; Icon: () => React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100">
      <Icon /> {text}
    </Link>
  );
}

function SearchForm() {
  return (
    <form className="flex items-center border border-gray-300 rounded-md p-2 text-sm gap-2 text-gray-600">
      <label htmlFor="search">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </label>
      <input type="search" id="search" placeholder="Search" className="outline-none" />
    </form>
  );
}

function HomeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
		</svg>
	);
}

function DollarIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
		</svg>
	);
}

function ReceiptIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" />
		</svg>
	);
}

function PaymentTransferIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
		</svg>
	);
}

function BankIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
		</svg>
	);
}

function LogoutIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="currentColor"
		>
			<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
		</svg>
	);
}
