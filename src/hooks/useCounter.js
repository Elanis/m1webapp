import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function useCounter() {
	return useContext(CounterContext).count;
}
// Alt:
/*
export default function useCounter() {
	const { count } = useContext(CounterContext);
	return count;
}
*/

