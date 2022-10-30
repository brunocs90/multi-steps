import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";

export function Step1() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step2');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Basic Info:
                    </div>
                    <div className="field">
                        <div className="label">First Name</div>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <div className="label">Last Name</div>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <button onClick={handleNextStep}>Next</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}