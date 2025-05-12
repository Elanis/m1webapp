import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import useIncrement from "../../hooks/useIncrement";
import useSetCount from "../../hooks/useSetCount";

export default function Counter() {
	const count = useCounter();
	const increment = useIncrement();
	const [count2, setCount2] = useState(0);

	return (
		<div>
			<input
				type="button"
				onClick={increment}
				/// ~== onClick={() => increment()}
				value="Click me!"
			/>
			<span>Total: {count}</span>
			<input
				type="button"
				onClick={() => setCount2((curr) => curr + 1)}
				value="Click me!"
			/>
			<span>Total: {count2}</span>
		</div>
	);
}