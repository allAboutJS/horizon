export default function TransactionTable() {
	const data = [
		{
			transaction: "Netflix",
			amount: -12.99,
			status: "Processing",
			date: "Thu 8:00pm",
			category: "Subscriptions",
		},
		{
			transaction: "John Doe",
			amount: 150.0,
			status: "Success",
			date: "Thu 10:30am",
			category: "Deposit",
		},
		{
			transaction: "Amazon",
			amount: -45.5,
			status: "Success",
			date: "Wed 5:45pm",
			category: "Shopping",
		},
		{
			transaction: "Uber Eats",
			amount: -22.3,
			status: "Declined",
			date: "Wed 7:20pm",
			category: "Food",
		},
		{
			transaction: "Gym Membership",
			amount: -35.0,
			status: "Processing",
			date: "Tue 6:00am",
			category: "Health",
		},
		{
			transaction: "PayPal Transfer",
			amount: 200.0,
			status: "Success",
			date: "Mon 11:15am",
			category: "Deposit",
		},
		{
			transaction: "Groceries",
			amount: -75.2,
			status: "Success",
			date: "Sun 3:45pm",
			category: "Groceries",
		},
		{
			transaction: "Starbucks",
			amount: -5.75,
			status: "Success",
			date: "Sun 9:30am",
			category: "Food",
		},
	];

	return (
		<table className="w-full border-collapse">
			<tr className="[&>th:first-child]:rounded-tl-md [&>th:last-child]:rounded-tr-md bg-blue-50">
				<th className="text-xs font-semibold text-left border-b-1 border-b-zinc-200 p-2">
					Transaction
				</th>
				<th className="text-xs font-semibold text-left border-b-1 border-b-zinc-200 p-2">
					Amount
				</th>
				<th className="text-xs font-semibold text-left border-b-1 border-b-zinc-200 p-2">
					Status
				</th>
				<th className="text-xs font-semibold text-left border-b-1 border-b-zinc-200 p-2">
					Date
				</th>
				<th className="text-xs font-semibold text-left border-b-1 border-b-zinc-200 p-2">
					Category
				</th>
			</tr>

			{data.map((datum) => (
				<tr
					key={datum.transaction}
					className={`${datum.status === "Success" ? "bg-green-50" : datum.status === "Processing" ? "bg-zinc-50" : "bg-red-50"}`}
				>
					<td className="text-sm text-left border-b-1 border-b-zinc-200 p-2 flex items-center gap-1">
						<div className="font-bold w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center"></div>
						{datum.transaction}
					</td>
					<td
						className={`${datum.status === "Declined" ? "text-red-500" : "text-green-500"} text-sm text-left border-b-1 border-b-zinc-200 p-2`}
					>
						{datum.amount}
					</td>
					<td className="text-sm text-left border-b-1 border-b-zinc-200 p-2">
						<span
							className={`${datum.status === "Success" ? "bg-green-200 text-green-500" : datum.status === "Processing" ? "bg-zinc-200 text-zinc-500" : "bg-red-200 text-red-500"} px-2 py-1 rounded-full flex items-center gap-2 w-fit`}
						>
							<span
								className={`${datum.status === "Success" ? "bg-green-500" : datum.status === "Processing" ? "bg-zinc-500" : "bg-red-500"} p-1 rounded-full`}
							></span>
							{datum.status}
						</span>
					</td>
					<td className="text-sm text-left border-b-1 border-b-zinc-200 p-2">
						{datum.date}
					</td>
					<td className="text-sm text-left border-b-1 border-b-zinc-200 p-2">
						<span
							className={`${datum.status === "Success" ? "border-purple-500 text-purple-500" : datum.status === "Processing" ? "border-blue-500 text-blue-500" : "border-red-500 text-red-500"} px-2 py-1 rounded-full flex items-center gap-2 w-fit border-1`}
						>
							<span
								className={`${datum.status === "Success" ? "bg-purple-500" : datum.status === "Processing" ? "bg-blue-500" : "bg-red-500"} p-1 rounded-full`}
							></span>
							{datum.category}
						</span>
					</td>
				</tr>
			))}
		</table>
	);
}
