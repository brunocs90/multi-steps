import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useEffect } from "react";

export function Step5() {
    const { state, dispatch } = formContext();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 5
        });
    }, []);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Thanks for registering
                    </div>
                    <div className="field btns">
                        <button className="next" onClick={handleNextStep}>Voltar</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}