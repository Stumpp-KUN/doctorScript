import { useState } from 'react'
import css from './Home.module.css'
import LinkButton from '../../Components/LinkButton'
import Select from '../../Components/Select/Select';
// import { Button } from '../../Components/Button/Button';
import Login from '../../Components/login/Login';
// import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [selectedVal, setSelectedVal] = useState('')
    const [modalLogin, setModalLogin] = useState(false)
    // const navigate = useNavigate()

    const options = [
        { value: 'Оператор', label: 'Оператор' },
        { value: 'Координатор', label: 'Координатор' },
        { value: 'Администратор', label: 'Администратор' },
        { value: 'Главный администратор', label: 'Главный администратор' }
    ]
    // const handleClick = () => {
    //     selectedVal === 'operator' && navigate('/operator')
    //     selectedVal === 'coordinator' && navigate('/coordinator')
    //     selectedVal === 'administrator' && setModal(true)
    //     selectedVal === 'mainadministrator' && setModal(true)
    // }
    const handleSelect = (e) => {
        e.value === 'Оператор' && setSelectedVal('operator')
        e.value === 'Координатор' && setSelectedVal('coordinator')
        e.value === 'Администратор' && setSelectedVal('administrator')
        e.value === 'Главный администратор' && setSelectedVal('mainadministrator')
    }


    return (
        <div className={css.container} >
            <div className={css.selectMain}>
                <h1 className={css.title}>%приветствие%</h1>
                <p className={css.text}>%какое-нибудь информационное сообщение%</p>
                <p className={css.selectTopText}>Я хочу войти в систему как</p>
                <div className={css.selectDiv}>
                    <Select options={options} handleSelect={handleSelect} placeholder="Выбрать"/>
                </div>
                <LinkButton btnClass={'btnFilled'} route={selectedVal} variant={'filled'} setModalLogin={setModalLogin}>Next</LinkButton>
                {/* <Button handleClick={handleClick} btnClass={'btnFilled'} variant={'filled'}>Next</Button> */}
                <Login modalLogin={modalLogin} setModalLogin={setModalLogin} route={selectedVal}/>
            </div>
        </div>
    )
}

export default Home;