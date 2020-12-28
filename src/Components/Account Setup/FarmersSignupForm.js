import React, { Component } from 'react';
import Input from './Dumb components/Input';
import Select from './Dumb components/Select';
import Button from './Dumb components/Button';

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            newUser: {
                name:'',
                email:'',
                contactDetails:'',
                location:'',
                agroProducts:'',
                productionScale:''
            },

            productionScaleOptions: ['Large', 'Small']

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }
    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                newUser : {
                    ...prevState.newUser, [name]:value
                }
            }
        },() => console.log(this.state.newUser)
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch('http://localhost:3000', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e) {

        e.preventDefault();
        this.setState({
            newUser: {
                name:'',
                email:'',
                contactDetails:'',
                productionScale:[]
            },
        });
        
    }
    render() {
        return (
            <form className="form-container"> 
            <Input type={'text'}
                title={'Full Name'}
                name={'name'}
                value={this.state.newUser.name}
                placeholder={'Enter your name'}
                handleChange={this.handleInput}/>  {/*Name of the user*/}

            <Input type={'email'}
                title={'Email'}
                name={'email'}
                value={this.state.newUser.email}
                placeholder={'Enter your Email'}
                handleChange={this.handleInput}/>   {/*Input for email*/}

            <Input type={'number'}
                title={'Contact'}
                name={'contactDetails'}
                value={this.state.newUser.contactDetails}
                placeholder={'Contact Details'}
                handleChange={this.handleInput}/>{/*Input for user's contact details*/}

            <Select title={'Scale of Production'}
                name={'productionScale'}
                options={this.state.productionScaleOptions}
                value={this.state.newUser.productionScale}
                placeholder={'Select your scale of production'}
                handleChange={this.handleInput}/> {/*Production sclae selection*/}
            
            <Button 
                title={'Register'}
                action={this.handleFormSubmit}/> {/*Submit button*/}
            <Button 
                title={'Clear'}
                action ={this.handleClearForm}/>{/*Reset the form button*/}

            </form>
        );
    }
}

export default SignupForm;
