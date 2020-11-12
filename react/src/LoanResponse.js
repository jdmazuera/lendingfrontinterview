import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const LoanResponse = ({ loan_status,resetLoanStatus }) => {
        const getLoanResponse = () => {
            switch(loan_status) {
                case 'Approved':
                    return (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-success">
                                    Your loan has been approved.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="button-group d-flex justify-content-end">
                                    <button className="btn btn-primary" onClick={resetLoanStatus}>Back</button>
                                </div>
                            </div>
                        </div>
                    )
                case 'Undecided':
                    return (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-secondary">
                                    Your loan can not be decided.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="button-group d-flex justify-content-end">
                                    <button className="btn btn-primary" onClick={resetLoanStatus}>Back</button>
                                </div>
                            </div>
                        </div>
                    )
                case 'Declined':
                    return (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-warning">
                                    Your loan has been declined.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="button-group d-flex justify-content-end">
                                    <button className="btn btn-primary" onClick={resetLoanStatus}>Back</button>
                                </div>
                            </div>
                        </div>
                    )
                default: 
                    return(
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-danger">
                                    An error has ocurred, your loan will be declined.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="button-group d-flex justify-content-end">
                                    <button className="btn btn-primary" onClick={resetLoanStatus}>Back</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        }

        return getLoanResponse();
}

export default LoanResponse;