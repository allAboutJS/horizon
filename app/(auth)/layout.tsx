import Aside from './components/Aside'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="md:grid grid-cols-2 min-h-screen">
			<main>{children}</main>
			<Aside />
		</div>
	);
}
