import React, {Component} from 'react';
import './SignUp.styles.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SingUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("password don't mach");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
           await createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           });

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = async event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
    <div className='singUp'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='signUpForm' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='display name'
            required
            />
            <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='email'
            required
            />
            <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='password'
            required
            />
            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirm password'
            required
           />
           <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
    </div>
        )
    }
};
export default SingUp;