import React,{ useState } from 'react'
import { withRouter } from "react-router";

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFormDone(true);
        setEmail('');
        setPassword('');
        props.history.push('/counter');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="submit" value="submit" />
            </form>
            {props.formDone ? "成功填寫表單" : "表單未完成"}
        </div>
    )
}

export default withRouter(Form);