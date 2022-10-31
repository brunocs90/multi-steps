import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const step2FormValidationSchema = zod.object({
    emailAddress: zod.string().email({ message: "Invalid email address" }),
    phoneNumber: zod.string().min(1, "Invalid phone number"),
});

type step2FormSchemaType = zod.infer<typeof step2FormValidationSchema>;

export function Step2() {
    const { dispatch } = formContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<step2FormSchemaType>({
        resolver: zodResolver(step2FormValidationSchema),
    });

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
                        <input type="text"
                            {...register('emailAddress')}
                        />
                        {errors.emailAddress && (
                            <p className="error">{errors.emailAddress.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="label">Phone Number</div>
                        <input type="number"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && (
                            <p className="error">{errors.phoneNumber.message}</p>
                        )}
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