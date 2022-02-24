import { useEffect } from "react";

const useOnClickOutside = (ref, onClickOutside) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				onClickOutside && onClickOutside();
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, onClickOutside]);
};

export default useOnClickOutside;
