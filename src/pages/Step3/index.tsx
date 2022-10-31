import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const step3FormValidationSchema = zod.object({
    date: zod.string().min(1, "Invalid date"),
});

type step3FormSchemaType = zod.infer<typeof step3FormValidationSchema>;

export function Step3() {
    const { dispatch } = formContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<step3FormSchemaType>({
        resolver: zodResolver(step3FormValidationSchema),
    });

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

    console.log(errors);

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Date of Birth:
                    </div>
                    <div className="field">
                        <div className="label">Date</div>
                        <input type="date"
                            placeholder="dd-mm-yyyy"
                            {...register('date')}
                        />
                        {errors.date && (
                            <p className="error">{errors.date.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="label">Gender</div>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select >
                    </div>
                    <div className="field btns">
                        <button className="prev" onClick={handleBackStep}>Previous</button>
                        <button onClick={handleSubmit(handleNextStep)}>Next</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}