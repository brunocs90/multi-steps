// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    date: string;
    gender: 0 | 1 | 2;
    userName: string;
    password: string;
}

type Action = {
    type: FormActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    date: '',
    gender: 0,
    userName: '',
    password: '',
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setFirstName,
    setLastName,
    setEmailAddress,
    setPhoneNumber,
    setDate,
    setGender,
    setUserName,
    setPassword
}

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };

        case FormActions.setFirstName:
            return { ...state, firstName: action.payload };

        case FormActions.setLastName:
            return { ...state, lastName: action.payload };

        case FormActions.setEmailAddress:
            return { ...state, emailAddress: action.payload };

        case FormActions.setPhoneNumber:
            return { ...state, phoneNumber: action.payload };

        case FormActions.setDate:
            return { ...state, date: action.payload };

        case FormActions.setGender:
            return { ...state, gender: action.payload };

        case FormActions.setUserName:
            return { ...state, userName: action.payload };

        case FormActions.setPassword:
            return { ...state, password: action.payload };

        default:
            return state;
    }
}

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const formContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}