import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-xl font-bold">Vite + React</h1>
			<div>
				<button
					type="button"
					className="bg-blue-600 p-2 rounded-lg shadow text-white font-bold"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
}

export default App;
