import css from './LinkButton.module.css';
import { Link } from 'react-router-dom'


const LinkButton = ({ children, route, variant, setModalLogin }) => {
    const variants = {
        filled: `${css.btn} ${css.btnFilled}`
    }
    const handlerclick = (e) => {
        if(route === 'administrator' || route === 'mainadministrator') {
            e.preventDefault()
            setModalLogin(true)
        }
    }

	return (
        <div className={variants[`${variant}`]} >                       
            <Link to={`/${route}`} onClick={handlerclick}>{children}</Link>
        </div>
		
	)
}

export default LinkButton