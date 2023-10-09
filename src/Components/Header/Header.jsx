import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className={css.header}>
            <div className="container">
               <div className={css.wrapper}>
               <NavLink to="/" className={css.logo}>%Logo%</NavLink>
                    <div className={css.help}>Help</div>
                </div>
            </div>
		</header>
	)
}

export default Header;