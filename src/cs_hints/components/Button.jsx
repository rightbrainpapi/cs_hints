import React from "react";
import "./styles/button.css";

const STYLES = [
	"btn--nav--solid",
	"btn--ico--solid",
	"btn--primary--solid",
	"btn--warning--solid",
	"btn--danger--solid",
	"btn--success--solid",
	"btn--primary--outline",
	"btn--warning--outline",
	"btn--danger--outline",
	"btn--success--outline",
];

const SIZES = ["btn--medium", "btn--small"];

const Button = ({
	onClick,
	children,
	type,
	text,

	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize} `}
			onClick={onClick}
			type={type}
			children={children}
			buttonStyle={buttonStyle}
			buttonSize={buttonSize}
		>
			{text}
		</button>
	);
};

export default Button;
