import Accordion from "./components/Accordion";
import TransactionTable from "./components/TransactionTable";
import BudgetTracker from "./components/BudgetTracker";

export default function Dashboard() {
	return (
		<div className="lg:grid grid-cols-3 min-h-screen">
			<div className="py-6 px-4 space-y-6 col-span-2 border-r-1 border-r-zinc-300">
				<div>
					<h1 className="text-3xl font-bold">
						Welcome, <span className="text-blue-500">Victor</span>
					</h1>
					<p className="text-zinc-800">
						Access and manage your account and transcations
						efficiently.
					</p>
				</div>

				<div className="p-4 rounded-2xl border-1 border-zinc-300 flex">
					<div className="flex flex-1">
						<div>
							<svg
								width="100"
								height="100"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="50"
									cy="50"
									r="40"
									stroke="#E0E7FF"
									stroke-width="10"
									fill="none"
								/>

								<path
									d="M50 10 
           A40 40 0 1 1 20.71 79.29"
									stroke="#2563EB"
									stroke-width="10"
									fill="none"
									stroke-linecap="round"
								/>
							</svg>
						</div>
						<div className="flex items-center flex-col justify-between">
							<div className="font-bold">2 Bank Accounts</div>
							<div className="space-y-1">
								<div className="text-sm">
									Total Current Balance
								</div>
								<div className="text-2xl font-bold">
									$2,698.12
								</div>
							</div>
						</div>
					</div>
					<div>
						<button className="text-xs text-blue-500 cursor-pointer font-semibold">
							+ Add Bank
						</button>
					</div>
				</div>

				<div>
					<div className="flex items-center">
						<h2 className="text-2xl font-bold flex-1">
							Recent Transactions
						</h2>
						<a
							href="#"
							className="p-2 rounded-lg border-1 border-zinc-200 text-sm"
						>
							View all
						</a>
					</div>
					<Accordion
						data={[
							{
								label: "chase_bank",
								heading: "Chase Bank",
								content: <ChaseBank />,
							},
							{
								label: "bank_of_africa",
								heading: "Bank of Africa",
								content: null,
							},
							{
								label: "first_platypus_bank",
								heading: "First Platypus Bank",
								content: null,
							},
						]}
					/>
				</div>
			</div>

			{/* Right Side bar */}
			<aside className="space-y-6">
				<div className="relative aspect-[3/1]">
					<div className="aspect-[3/1] bg-gradient-to-br from-blue-600 to-purple-600"></div>
					<div className="absolute -bottom-16 left-4 h-24 w-24 rounded-full bg-gray-700"></div>
				</div>

				<div className="mt-20 px-4">
					<h2 className="text-2xl font-bold">Onah Victor</h2>
					<p className="text-zinc-700 text-sm">
						victoronah.dev@gmail.com
					</p>
				</div>

				<div>
					<div className="px-4 flex justify-between items-center">
						<h2 className="font-bold">My Banks</h2>
						<button className="text-zinc-800 text-sm font-medium">
							+ Add Bank
						</button>
					</div>

					<div className="relative border-b-1 border-b-zinc-200 px-8 pt-6 pb-12">
						<div className="absolute w-[calc(100%-56px)] left-8 right-0 top-10 bottom-0 aspect-video bg-slate-800 rounded-xl shadow-md"></div>
						<div className="aspect-video bg-pink-800 rounded-xl shadow-md -translate-x-4"></div>
					</div>
				</div>

				<BudgetTracker />
			</aside>
		</div>
	);
}

function ChaseBank() {
	return (
		<div className="py-6 space-y-6">
			<div className="p-4 rounded-2xl bg-blue-100/70 flex">
				<div className="flex flex-1 items-center gap-2">
					<div className="font-bold w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center">
						CB
					</div>
					<div className="space-y-0.5">
						<div className="text-xl text-blue-950 font-bold">
							Chase Bank
						</div>
						<div className="text-2xl font-bold text-blue-700">
							$2,698.12
						</div>
					</div>
				</div>
				<div>
					<button className="text-xs text-green-600 p-2 rounded-full bg-green-200 cursor-pointer font-semibold">
						Savings
					</button>
				</div>
			</div>

			<div className="max-w-full overflow-x-auto">
				<TransactionTable />
			</div>
		</div>
	);
}
