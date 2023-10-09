
import css from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
// import Login from '../login/Login';
// import { useState } from 'react';


const List = ({ children, ...props }) => {
    // const [modalwindow, setModalwindow] = useState(false)

    return (
        <div className={css.wrapper}>
            <Header />
                <main className={css.main}>
                    { children }
                </main>
            <Footer />
            {/* <Login modal={modalwindow} setModal={setModalwindow}/> */}
        </div>

        
    )
}

export default List;
