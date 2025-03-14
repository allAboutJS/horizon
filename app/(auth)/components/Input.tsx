import { InputHTMLAttributes, DetailedHTMLProps } from "react";

export default function Input({
	label,
	id,
	...otherProps
}: DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label: string;
}) {
	return (
		<div className="space-y-1">
			<label className="block text-sm font-semibold" htmlFor={id}>
				{label}
			</label>
			<input
				{...otherProps}
				className="p-2 rounded-md border-zinc-200 border-1 outline-blue-500 w-full block min-w-0"
			/>
		</div>
	);
}
