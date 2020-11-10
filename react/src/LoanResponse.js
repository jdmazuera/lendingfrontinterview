import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const LoanResponse = ({ loan_status }) => {
        const getLoanResponse = () => {
            switch(loan_status) {
                case 'Approved':
                    return (
                        <div>
                            Your loan has been approved.
                        </div>
                    )
                case 'Undecided':
                    return (
                        <div>
                            Your loan can not be decided.
                        </div>
                    )
                case 'Declined':
                    return (
                        <div>
                            Your loan has been declined.
                        </div>
                    )
                default: 
                    return(
                        <div>
                            An error has ocurred, your loan will be declined.
                        </div>
                    )
            }
        }

        return getLoanResponse();
}

export default LoanResponse;