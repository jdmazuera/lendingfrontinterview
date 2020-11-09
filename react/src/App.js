import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './Form'
import LoanResponse from './LoanResponse'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'show_form': true
        }
    }

    submitLoanRequest = () => {
        this.setState({ show_form: false })
    }

    render() {
        if (this.state.show_form) {
            var form = <Form submitLoanRequest={this.submitLoanRequest} />
            var loan_response = <p></p>
        }
        else {
            var form = <span />
            var loan_response = <LoanResponse/> 
        }

        return (
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <h1 className="display-4">{"Fast Loans"}</h1>
                        <p className="lead">{"Please fill the from to send a request for a loan"}</p>
                        <p className="lead">{"you will have the answer in seconds"}</p>
                    </div>
                </div>
                <div className="container">
                    {form}
                    {loan_response}
                </div>
            </div>
        )
    }
}

export default App;
