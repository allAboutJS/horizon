import Image from "next/image";

export default function Aside() {
	return <aside className="bg-blue-100 max-md:hidden flex sticky h-screen top-0 items-center justify-end">
		<Image className="h-[80%] w-auto rounded-l-xl border-4 border-black border-r-0" src="/banner.png" height={800} width={800} />
	</aside>;
}
