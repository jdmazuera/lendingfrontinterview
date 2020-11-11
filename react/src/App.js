import React from 'react'
import LoanForm from './Form'
import LoanResponse from './LoanResponse'
import axios from 'axios'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loan_status: false
        }
    }

    submitLoanRequest = (requested_amount) => {
        axios.get(`http://localhost:8888/loan/check_availability/`,{
            params: {
                'requested_amount' : requested_amount
            },

        }).then(res => {
            const { loan_status } = res.data;
            this.setState({ loan_status });
        })
    }

    render() {
        const loan_form = !this.state.loan_status ? (<LoanForm submitLoanRequest={this.submitLoanRequest} />) : (null);
        const loan_response = this.state.loan_status ? (<LoanResponse loan_status={this.state.loan_status}/>) : (null);

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
                    {loan_form}
                    {loan_response}
                </div>
            </div>
        )
    }
}

export default App;
