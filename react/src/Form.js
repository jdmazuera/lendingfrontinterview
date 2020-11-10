import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tax_id: '',
            business_name: '',
            requested_amount: '',
            owner_social_security_number: '',
            owner_name: '',
            owner_email: ''
        };
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.tax_id);
        event.preventDefault();
    }

    handleChangeTaxID = (event) => {
        this.setState({tax_id: event.target.value});
    }

    handleChangeBusinessName = (event) => {
        this.setState({business_name: event.target.value});
    }

    handleChangeRequestedAmount = (event) => {
        this.setState({requested_amount: event.target.value});
    }

    handleChangeOwnerSocialSecurityNumber = (event) => {
        this.setState({owner_social_security_number: event.target.value});
    }

    handleChangeOwnerName = (event) => {
        this.setState({owner_name: event.target.value});
    }

    handleChangeOwnerEmail = (event) => {
        this.setState({owner_email: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="tax_id">
                        Tax ID:
                    </label>
                    <input id="tax_id" className="form-control" type="text" value={this.state.tax_id} onChange={this.handleChangeTaxID}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input id="name" className="form-control" type="text" value={this.state.business_name} onChange={this.handleChangeBusinessName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="requested_amount">
                        Requested Amount:
                    </label>
                    <input id="requested_amount" className="form-control" type="number" value={this.state.requested_amount} onChange={this.handleChangeRequestedAmount}/>
                </div>
                <div className="form-group">
                    <label htmlFor="owner_social_security_number">
                        Owner Social Security Number:
                    </label>
                    <input id="owner_social_security_number" className="form-control" type="number" value={this.state.owner_social_security_number} onChange={this.handleChangeOwnerSocialSecurityNumber}/>
                </div>
                <div className="form-group">
                    <label htmlFor="owner_name">
                        Owner Name:
                    </label>
                    <input id="owner_name" className="form-control" type="text" value={this.state.owner_name} onChange={this.handleChangeOwnerName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="owner_email">
                        Owner Email:
                    </label>
                    <input id="owner_email" className="form-control" type="text" value={this.state.owner_email} onChange={this.handleChangeOwnerEmail}/>
                </div>
                <div className="button-group">
                    <input id="tax_id" className="btn btn-primary" type="button" value="Apply" onClick={() => this.props.submitLoanRequest(this.state.requested_amount)} />
                </div>
                
            </form>
        );
    }
}

export default Form;