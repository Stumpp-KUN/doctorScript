import css from './Button.module.css';


export const Button = ({ children, disabled, handleClick, type, variant }) => {
    const variants = {
        filled: `${css.btn} ${css.btnFilled}`
    }

    
	return (
		<button
			type={type}
			disabled={disabled}
            className={variants[`${variant}`]}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

