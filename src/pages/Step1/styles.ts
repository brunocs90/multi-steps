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
        text-align: left;
        font-size: 25px;
        font-weight: 500;
    }

    .field{
        width: 330px;
        height: 45px;
        margin: 45px 0;
        display: flex;
        position: relative;
        margin-top: 60px;
    }

    .field .label{
        position: absolute;
        top: -30px;
        font-weight: 500;
    }

    .error{
        position: absolute;
        font-size: 14px;
        font-weight: 200;
        top: 50px;
        color: red;
    }

    .field input{
        height: 100%;
        width: 100%;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding-left: 15px;
        font-size: 18px;
    }

    .field select{
        width: 100%;
        padding-left: 10px;
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