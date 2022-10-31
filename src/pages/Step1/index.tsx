import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const step1FormValidationSchema = zod.object({
    firstName: zod.string().min(1, "Invalid First"),
    lastName: zod.string().min(1, "Invalid Last Name"),
});

type step1FormSchemaType = zod.infer<typeof step1FormValidationSchema>;

export function Step1() {
    const { dispatch } = formContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<step1FormSchemaType>({
        resolver: zodResolver(step1FormValidationSchema),
    });

    function handleNextStep(data: any) {
        console.log(data);
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
                        <input type="text"
                            {...register('firstName')}
                        />
                        {errors.firstName && (
                            <p className="error">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="label">Last Name</div>
                        <input type="text"
                            {...register('lastName')}
                        />
                        {errors.lastName && (
                            <p className="error">{errors.lastName.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <button onClick={handleSubmit(handleNextStep)}>Next</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}