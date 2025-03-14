export default function BudgetTracker() {
	const budgetItems = [
		{
			category: "Subscriptions",
			amountLeft: "$25 left",
			progress: "w-3/5",
			color: "bg-blue-500",
			icon: "💻",
			bgColor: "bg-blue-100",
			textColor: "text-blue-600",
		},
		{
			category: "Food and booze",
			amountLeft: "$120 left",
			progress: "w-4/5",
			color: "bg-pink-500",
			icon: "🛍️",
			bgColor: "bg-pink-100",
			textColor: "text-pink-600",
		},
		{
			category: "Savings",
			amountLeft: "$50 left",
			progress: "w-3/4",
			color: "bg-green-500",
			icon: "🔗",
			bgColor: "bg-green-100",
			textColor: "text-green-600",
		},
	];

	return (
		<div className="space-y-6 px-4 py-6">
			<h2 className="font-bold">My Budget</h2>

			<div className="space-y-3 text-sm">
				{budgetItems.map((item, index) => (
					<div
						key={index}
						className={`p-4 rounded-lg shadow-sm ${item.bgColor} flex items-center gap-2`}
					>
						<div>{item.icon}</div>

						<div className="flex-1 space-y-1">
							<div className="flex justify-between items-center">
								<span className="flex items-center space-x-2">
									<span>{item.category}</span>
								</span>
								<span
									className={`font-semibold ${item.textColor}`}
								>
									{item.amountLeft}
								</span>
							</div>
							<div className="w-full bg-gray-200 h-1 rounded-full">
								<div
									className={`h-1 rounded-full ${item.color} ${item.progress}`}
								></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
