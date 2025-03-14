import Input from "../components/Input";
import Logo from "../../components/Logo";
import Link from "next/link";

export default function Login() {
	return (
		<div className="max-w-md mx-auto gap-y-6 py-8 px-4 flex flex-col justify-center min-h-screen">
			<div>
				<Logo />
			</div>

			<div className="space-y-0.5">
				<h1 className="font-bold text-2xl">Log In</h1>
				<p className="text-zinc-800 text-sm">
					Welcome back! Please enter your details.
				</p>
			</div>

			<form action="/dashboard" className="space-y-4">
				<Input type="email" label="Email" />
				<Input type="password" label="Password" />

				<button className="p-2 rounded-md bg-blue-500 text-white text-sm block w-full text-center">
					Login
				</button>
			</form>

			<p className="text-center text-sm">
				Don't have an account?{" "}
				<Link href="/register" className="text-blue-500">
					Sign up
				</Link>
			</p>
		</div>
	);
}
