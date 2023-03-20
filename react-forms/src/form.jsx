import { useState, useRef } from 'react';

const Form = () => {


    const [user,setUser] = useState({
        name: "",
        email: "",
        number: "",
        bio: ""

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentErrors = validate()
        setErrors(currentErrors)
        
        if (currentErrors.length) {
            console.log('errors')
        }else {
            console.log('fake request made')
        }
    }

    const [errors, setErrors] = useState([])


    const handleChange = (field) => {
        return (e) => {
            const val = e.target.value;

            setUser({
                ...user,
                [field]: val
            })
        }
    }



    const validate = () => {
        const currentErrors = []
        if(user.name.length === 0 ) {
            currentErrors.push("name cannot be blank")
        }
        if(user.email.length === 0){
            currentErrors.push("email cannot be blank")
        } 
        return currentErrors
    }




    
    return (
        <>
            <ul>
                {errors.map((error, i) => <li key={i}> {error} </li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={user.name} onChange={handleChange("name")}/>
                <input type="email" placeholder="Email" value={user.email} onChange={handleChange("email")}/>
                <input type="tel" placeholder="Telephone Number" value={user.number} onChange={handleChange("number")}/>
                <label htmlFor="phone-type">Select Phone Type</label>
                <select id="phone-type">
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <label htmlFor="instructor">Instructor</label>
                <input type="radio" name="role" id='instructor' value='instructor' />
                <label htmlFor="student">Student</label>
                <input type="radio" name="role" id='student' value='student' />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="checkbox" id='notification' name='notification' />
                <label htmlFor="notification">Sign up for e-mail notifications!</label>
                <br />
                <input type="submit" value='Submit' />
            </form>
        </>
    )
}

export default Form;