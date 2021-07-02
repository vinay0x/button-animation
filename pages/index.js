import { useState } from "react";
import Button from "../components/Button";
export default function Home() {
	const [loading, setLoading] = useState(false);
	const onClick = () => {
		setLoading(!loading);
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-4 transition-all duration-200">
			<div className="text-4xl font-semibold text-center">
				Click once to start. Click again to stop.
			</div>
			<span className="px-1.5 py-0.5 rounded bg-gray-100 text-sm">
				{loading ? "Loading" : "Done"}
			</span>
			<Button label={"Submit"} onClick={onClick} loading={loading} />
		</div>
	);
}
