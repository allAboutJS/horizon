"use client";

import { useState } from "react";

export interface AccordionProps {
	data: { label: string, heading: string; content: React.ReactNode  }[];
}

export default function Accordion({ data } : AccordionProps) {
	const [activeTab, setActiveTab] = useState<typeof data[number]>(data[0]);
	const activeClassNames = "text-blue-500 border-b-2 border-b-blue-500";
	const changeActiveTab = (label: string) => setActiveTab(data.find(datum => datum.label === label)!);

	return (
		<div>
			<div className="border-b-1 border-zinc-300 flex overflow-x-auto gap-2">
				{
					data.map(datum => (
						<button 
							onClick={() => changeActiveTab(datum.label)}
							key={datum.label} 
							className={`${datum.label === activeTab.label ? activeClassNames : ""} p-1 text-sm min-w-fit cursor-pointer`}
						>
							{datum.heading}
						</button>
					))
				}
			</div>
			<div>
				{
					activeTab.content
				}
			</div>
		</div>
	);
}