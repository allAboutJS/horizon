import Input from "../components/Input";
import Logo from "../../components/Logo";
import Link from "next/link";

export default function Register() {
	return (
		<div className="max-w-md mx-auto gap-y-6 py-8 px-4 flex flex-col justify-center min-h-screen">
			<div>
				<Logo />
			</div>

			<div className="space-y-0.5">
				<h1 className="font-bold text-2xl">Sign Up</h1>
				<p className="text-zinc-800 text-sm">Please enter your details.</p>
			</div>

			<form action="/login" className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<Input type="text" label="First name" />
					<Input type="text" label="Last name" />
				</div>

				<Input type="address" label="Address" />

				<div className="grid grid-cols-2 gap-4">
					<Input type="text" label="State" />
					<Input type="text" label="Postal code" />
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Input type="date" label="Date of birth" />
					<Input type="number" label="SSN" />
				</div>

				<Input type="email" label="Email" />
				<Input type="password" label="Password" />

				<button className="p-2 rounded-md bg-blue-500 text-white text-sm block w-full text-center">
					Sign Up
				</button>
			</form>

			<p className="text-center text-sm">
				Already have an account?{" "}
				<Link href="/login" className="text-blue-500">
					Login
				</Link>
			</p>
		</div>
	);
}
