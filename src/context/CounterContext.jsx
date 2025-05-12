import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext({ count: 0 });

export default function CounterContextProvider({ children }) {
	const [count, setCount] = useState(parseInt(localStorage.count || 0));

	useEffect(() => {
		document.title = `${count}`;
		localStorage.count = count;
	}, [count]);

	return (
		<CounterContext.Provider value={{
			count,
			setCount,
			increment: () => setCount((c) => c + 1)
		}}>
			{children}
		</CounterContext.Provider>
	);
}
