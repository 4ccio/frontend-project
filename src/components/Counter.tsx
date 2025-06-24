import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => {
		setCount((prevState) => prevState + 1);
	};

	return (
		<div className={classes.btn}>
			<h1>{count}</h1>
			<div></div>
			<button onClick={handleButtonClick}>Click</button>
		</div>
	);
};
