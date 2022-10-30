import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    overflow: hidden;

    form{
        display: flex;
        width: 400%;
    }
`;

export const PageStep = styled.div`
    width: 25%;
    transition: margin-left 0.3s ease-in-out;

    .title{
        text-align: center;
        justify-content: center;
        font-size: 31px;
        font-weight: 500;

        margin-top: 3.125rem;
        margin-bottom: 7.438rem;
    }

    .field{
        width: 20.625rem;
        height: 2.813rem;
        margin: 2.813rem 0;
        display: flex;
        position: relative;
    }

    .field .label{
        position: absolute;
        top: -1.875rem;
        font-weight: 500;
    }

    .field input{
        height: 100%;
        width: 100%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding-left: 0.938rem;
        font-size: 18px;
    }

    .field select{
        width: 100%;
        padding-left: 0.625rem;
        font-size: 17px;
        font-weight: 500;
    }

    .field button{
        width: 100%;
        height: calc(100% + 5px);
        border: none;
        background: #d33f8d;
        margin-top: -20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: 0.5s ease;
    }

    .field button:hover{
        background: #000;
    }

    .btns button{
        margin-top: -20px!important;
    }

    .btns button.prev{
        margin-right: 3px;
        font-size: 17px;
    }

    .btns button.next{
        margin-left: 3px;
    }
`;