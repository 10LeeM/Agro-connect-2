import React, { Component } from 'react';
import Input from './Dumb components/Input';
import Select from './Dumb components/Select';
import Button from './Dumb components/Button';


class BuyersSignupForm extends Component {
    constructor(props){
        super(props);

        this.state={
            newBuyer:{
                name:'',
                email:'',
                phoneNumber:'',
                location:'',
                operationScale:''
            },

            operationScaleOptions:['Large', 'Medium', 'Small']
        }
        //Set of validators for Buyers signup form

        

        // Binds class methods to react class instance
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.displayValiadationErrors=this.displayValiadationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
    }
    

    /**
     * Function called whenever a form input is changed 
     * Which in turn updates the state of this component and validators
     */

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.updateValidators(name, e.target.value);
        this.setState(prevState => {
            return{
                newBuyer : {
                    ...prevState.newBuyer, [name]: value
                }
            }
        }, () => console.log(this.state.newBuyer))
    }

    handleFormSubmit(e) {
        e.preventDefault();

        let userData = this.state.newBuyer;
        
        fetch('http://localhost:3000/' , {
            method: "POST",
            body: JSON.stringify(userData),
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successfull" + data)
            })
        })
  
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newBuyer:{
                name:'',
                email:'',
                phoneNumber:'',
                location:'',
                operationScale:''
            },
        });
    }

    /**
     * Updates the state of the validator for the specified validator
     */

     updateValidators(fieldName, value) {
         this.validators[fieldName].errors = [];
         this.validators[fieldName].state = value;
         this.validators[fieldName].valid = true;
         this.validators[fieldName].rules.forEach((rule) => {

            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)){
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
         });
     }
     

     // Function to display validation errors for a given input field

     displayValiadationErrors(fieldName) {
         const validator = this.validators[fieldName];
         const result = '';

         if (validator && !validator.valid) {
             const errors = validator.errors.map((info, index) => {
                 return <span className="error" key={index}>* {info}</span>;
             });

             return (
                 <div className="errors">
                     {errors}
                 </div>
             );
         }

         return result;
     }

    render() {
        return (
           <form className="form-container" onSubmit={this.handleFormSubmit}>

               <Input type={'text'}
                    title={'Full Name'}
                    name={'name'}
                    value={this.state.newBuyer.name}
                    placeholder={'Enter your name'}
                    handleChange={this.handleInput}/> {/*Name of new buyer*/}
                   
                    

               <Input type={'email'}
                    title={'Email'}
                    name={'email'}
                    value={this.state.newBuyer.email}
                    placeholder={'Enter your Email'}
                    handleChange={this.handleInput}/> {/*Email of new buyer*/}

               <Input type={'number'}
                    title={'Phone Number'}
                    name={'phoneNumber'}
                    value={this.state.newBuyer.phoneNumber}
                    placeholder={'Enter your Phone Number'}
                    handleChange={this.handleInput}/> {/*Contact details of new buyer*/}

                <Select title={'Scale of operation'}
                    name={'operationScale'}
                    options={this.state.operationScaleOptions}
                    value={this.state.newBuyer.operationScale}
                    placeholder={'Choose your current scale of operation'}
                    handleChange={this.handleInput}/>
                
                <Button
                    title={'Register'}
                    action={this.handleFormSubmit}/>
                
                <Button
                    title={'Clear'}
                    action={this.handleClearForm}/>


                    
               

              
           </form>
        );
    }
}

export default BuyersSignupForm;
