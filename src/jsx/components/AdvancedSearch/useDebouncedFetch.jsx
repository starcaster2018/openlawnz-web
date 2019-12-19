import { useState, useEffect } from "react";
import memoize from "fast-memoize";

const memoizedFetch = memoize(fullUrl => fetch(fullUrl));

const useDebouncedFetch = ({ term, source = "/", extraParams = "", useMemoize = true, delay = 500, avoidOnMount }) => {
	const [termDebounced, setTermDebounced] = useState(term);
	const [results, setResults] = useState([]);
	const [jumpFetch, setJumpFetch] = useState(avoidOnMount);
	const fetchFn = useMemoize ? memoizedFetch : fetch;

	useEffect(() => {
		const handler = setTimeout(() => {
			setTermDebounced(term);
		}, delay);

		return () => clearTimeout(handler);
	}, [term]);

	useEffect(() => {
		if (jumpFetch) return;
		const url = {}.toString.call(source) === "[object Function]" ? source() : source;

		fetchFn(`${url}${termDebounced}${extraParams}`)
			.then(result =>
				result
					.clone()
					.json()
					.then(data => setResults(data.results))
			)
			.catch(err => {
				console.log(err);
				setResults([]);
			});
	}, [termDebounced]);

	return {
		results,
		termDebounced,
		jumpFetch,
		setJumpFetch
	};
};

export default useDebouncedFetch;
