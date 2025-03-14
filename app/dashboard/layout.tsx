"use client";

import { useState } from "react";
import SideNav from "./components/SideNav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="md:grid grid-cols-[auto_1fr]">
			<SideNav
				isOpen={isSidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>

			<div className="flex-1 min-h-screen">
				{isSidebarOpen || (
					<button
						className="md:hidden fixed top-4 right-4 bg-blue-500 text-white p-2 rounded z-10"
						onClick={() => setSidebarOpen(true)}
					>
						☰
					</button>
				)}
				<main>{children}</main>
			</div>
		</div>
	);
}
