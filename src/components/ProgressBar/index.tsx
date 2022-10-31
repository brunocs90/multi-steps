import { formContext } from "../../contexts/FormContext";
import { ProgressBarContainer, StepContainer } from "./styles";

export function ProgressBar() {
    const { state, dispatch } = formContext();
    const step = state.currentStep;
    return (
        <ProgressBarContainer>
            <StepContainer>
                <p className={step > 1 ? "active" : ""}>Name</p>
                <div className={step > 1 ? "bullet active" : "bullet"}>
                    <span >1</span>
                </div>
                <div className="check">algo</div>
            </StepContainer>
            <StepContainer>
                <p className={step > 2 ? "active" : ""}>Contact</p>
                <div className={step > 2 ? "bullet active" : "bullet"}>
                    <span >2</span>
                </div>
            </StepContainer>
            <StepContainer>
                <p className={step > 3 ? "active" : ""}>Birth</p>
                <div className={step > 3 ? "bullet active" : "bullet"}>
                    <span >3</span>
                </div>
            </StepContainer>
            <StepContainer>
                <p className={step > 4 ? "active" : ""}>Submit</p>
                <div className={step > 4 ? "bullet active" : "bullet"}>
                    <span >4</span>
                </div>
            </StepContainer>
        </ProgressBarContainer>
    );
}