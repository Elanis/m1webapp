import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function useIncrement() {
	const { increment } = useContext(CounterContext);
	return increment;
}