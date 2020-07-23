import React, {useState} from "react";

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFormdone(true);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="text" placeholder="請輸入email"
                   onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input name="password" type="password" placeholder="請輸入密碼"
                   onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="submit" value="submit"/>
            {props.formdone ? <p>email:{email} 密碼:{password}</p> : null}
        </form>
    );
}

export default Form;