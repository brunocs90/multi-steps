import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { ChangeEvent, useEffect } from "react";

const step1FormValidationSchema = zod.object({
    firstName: zod.string().min(1, "Invalid First"),
    lastName: zod.string().min(1, "Invalid Last Name"),
});

type step1FormSchemaType = zod.infer<typeof step1FormValidationSchema>;

export function Step1() {
    const { state, dispatch } = formContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<step1FormSchemaType>({
        resolver: zodResolver(step1FormValidationSchema),
    });

    function handleNextStep(data: any) {
        navigate('/step2');
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setFirstName,
            payload: e.target.value
        });
    }

    function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setLastName,
            payload: e.target.value
        });
    }

    return (
        <FormContainer>
            <form action="#">
                <PageStep className="page">
                    <div className="title">
                        Basic Info:
                    </div>

                    <div className="field">
                        <div className="label">First Name</div>
                        <input
                            type="text"
                            {...register('firstName')}
                            value={state.firstName}
                            onChange={handleFirstNameChange}
                        />
                        {errors.firstName && (
                            <p className="error">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="label">Last Name</div>
                        <input
                            type="text"
                            {...register('lastName')}
                            value={state.lastName}
                            onChange={handleLastNameChange}
                        />
                        {errors.lastName && (
                            <p className="error">{errors.lastName.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <button
                            onClick={handleSubmit(handleNextStep)}>
                            Next
                        </button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}