import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const pattern = new RegExp('^[A-z]+[\d._-]*[A-z]*[@][A-z]+[.][A-z]+$');
    // const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");;
    
    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        try{
            if(values.comment === ''){
                throw Error('Invalid comment!');
            }
            if (values.firstName === '' || values.lastName === '' ||
                values.description === '' || values.email === '' ||
                values.password === '' || values.confirmPassword === '' || 
                values.iamge === '' || values.profileImage === ''){

                throw Error('Missing fields!');
            }
            if(values.firstName &&
                (values.firstName.length < 2 || values.firstName.length > 20)){
                throw Error('First name should be between 2 and 20 characters!');
            }
            if(values.lastName && 
                (values.lastName.length < 2 || values.lastName.length > 20)){
                throw Error('Last name should be between 2 and 20 characters!');
            }
            if(values.email && values.email.match(pattern)){
                throw Error('Invalid email!');
            }
            if (values.password && 
                values.password.length < 8 &&
                !values.password.includes(Number)){
                throw Error('Password should be at least 8 characters and conatains numbers!');
            }
            if (values.confirmPassword && values.confirmPassword !== values.password){
                throw Error('Password or confirm password does not match!');
            }
            if(values.comment && values.comment.length < 1){
                throw Error('Comment should be at least 1 character!');
            }
            if(values.description && values.description.length < 2){
                throw Error('Description should be at least 2 characters!');
            }
            if(values.profileImage && !values.profileImage.startsWith('https://')){
                throw Error('Invalid URL address for profile image!');
            }
            if(values.image && !values.image.startsWith('https://')){
                throw Error('Invalid URL address for post image!');
            }
            
            onSubmitHandler(values);
            
            setFormErrors({});
            
            setValues(initialValues);
        }catch (error){
            setFormErrors(error);
        }
        
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        setValues(newValues);
    };

    return {
        values,
        formErrors,
        changeHandler,
        onSubmit,
        changeValues,
    };
}