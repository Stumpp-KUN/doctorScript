import css from "./login.module.css"

import { useState } from "react";
import close from "./images/close.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import iconCross from "./images/icon-cross.svg";
import iconAttention from "./images/icon-attention.svg"

function Login({modalLogin, setModalLogin, route}) {
    const [error, setError] = useState(false)
    const {
        register,
        // resetField,
        reset,
        formState: {
            // errors,
            isValid,
        },
        handleSubmit,
    } = useForm()

    const navigate = useNavigate()

    function handleronClick() {
        setModalLogin(false)
        reset({
            username: "",
            password: ""
        })
        setError(false)
    }

    const onSubmit = async (data) => {
        try {
            const fieldsData = {
                login: data.username,
                password: data.password,
            };
            const jsonData = JSON.stringify(fieldsData);
            console.log(jsonData);
            const response = await axios.post("http://ec2-13-49-16-252.eu-north-1.compute.amazonaws.com:5000/api/auth/login/", jsonData, {
                headers: {
                    "Content-Type": "application/json",
            }   
            }); 
            console.log(response.data);
            if (response.data.accessToken && response.data.refreshToken) {
                Cookies.set("accessToken", response.data.accessToken);
                Cookies.set("refreshToken", response.data.refreshToken);
                console.log(Cookies.get('accessToken'))
                if(route === 'administrator') {
                    navigate('/administrator')
                } else if(route === 'mainadministrator') {
                    navigate('/mainadministrator')
                }
            }


        } catch (error) {
            console.error("Произошла ошибка при входе:", error);
            setError(true)
        }
    }
 
    return ( 
        <div className={modalLogin ? css.wrapper_open : css.wrapper}
        onClick={handleronClick}
        >
        <div className={css.registration} onClick={(e) => {e.stopPropagation()}}>
            <img src={close} alt="close" className={css.cross}
             onClick={handleronClick}
            />
                    <div className={css.itemleft}>
                        <div className={css.title}>
                        <h2>Пожалуйста, введите свои данные для входа в систему</h2>
                        </div>
                    </div>
                    <div className={css.itemright}>
                        <form action="" className={css.form} onSubmit={handleSubmit(onSubmit)}>
                            <label className={error ? css.label_error : css.label}>
                                <input 
                                name="username"
                                type="text" 
                                className={css.input} 
                                {...register("username", {
                                    required: true,
                                })}
                                />
                                <img className={css.img} src={error ? iconAttention : iconCross} alt={error ? "icon-attention" : "icon-cross"} />
                                <span className={css.span}>Имя пользователя</span>
                            </label>
                            <div className={css.texterror}>{ error ? "Пользователь не найден или введён неправильный пароль" : "Введите имя пользователя"}</div>
                            <label className={error ? css.label_error : css.label}>
                                <input 
                                name="password"
                                type="password" 
                                className={css.input}
                                {...register("password", {
                                        required: true,
                                })}
                                />
                                <img className={css.img} src={error ? iconAttention : iconCross} alt={error ? "icon-attention" : "icon-cross"} />
                                <span className={css.span}>Пароль</span>
                            </label>
                            <div className={css.texterror}>{ error ? "Пользователь не найден или введён неправильный пароль" : "Введите пароль"}</div>
                            <div className={css.linkpassword}>Забыли пароль?</div>
                            <input type="submit" className={css.input} disabled={!isValid} value="Войти"/>
                        </form>
                    </div>
                  </div>
                </div>
     );
}

export default Login;