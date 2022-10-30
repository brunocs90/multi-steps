import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";

export function Step4() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step5');
    }

    const handleBackStep = () => {
        navigate('/step3');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }, []);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Login Details:
                    </div>
                    <div className="field">
                        <div className="label">Username</div>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <div className="label">Password</div>
                        <input type="password" />
                    </div>
                    <div className="field btns">
                        <button className="prev" onClick={handleBackStep}>Previous</button>
                        <button className="next" onClick={handleNextStep}>Submit</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}