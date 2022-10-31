import { FormContainer, PageStep } from "./styles";
import { useNavigate } from 'react-router-dom';
import { FormActions, formContext } from "../../contexts/FormContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const step4FormValidationSchema = zod.object({
    username: zod.string().min(1, "Invalid username"),
    password: zod.string().min(1, "Invalid Password"),
});

type step4FormSchemaType = zod.infer<typeof step4FormValidationSchema>;

export function Step4() {
    const { state, dispatch } = formContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<step4FormSchemaType>({
        resolver: zodResolver(step4FormValidationSchema),
    });

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
                        <input type="text"
                            {...register('username')}
                        />
                        {errors.username && (
                            <p className="error">{errors.username.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="label">Password</div>
                        <input type="password"
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className="error">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="field btns">
                        <button className="prev" onClick={handleBackStep}>Previous</button>
                        <button onClick={handleSubmit(handleNextStep)}>Submit</button>
                    </div>
                </PageStep>
            </form>
        </FormContainer>
    );
}