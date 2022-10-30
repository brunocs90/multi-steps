import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";

export function Step2() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step3');
    }

    const handleBackStep = () => {
        navigate('/');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Contact Info:
                    </div>
                    <div className="field">
                        <div className="label">Email Address</div>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <div className="label">Last Name</div>
                        <input type="number" />
                    </div>
                    <div className="field btns">
                        <button className="prev" onClick={handleBackStep}>Previous</button>
                        <button className="next" onClick={handleNextStep}>Next</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}