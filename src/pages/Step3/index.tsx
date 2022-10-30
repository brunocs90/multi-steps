import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";

export function Step3() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step4');
    }

    const handleBackStep = () => {
        navigate('/step2');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Date of Birth:
                    </div>
                    <div className="field">
                        <div className="label">Date</div>
                        <input type="text" />
                    </div>
                    <div className="field">
                        <div className="label">Gender</div>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
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