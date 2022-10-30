import { CardContainer, HeaderContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { ProgressBar } from "../../components/ProgressBar";

export function DefaultLayout() {
    return (
        <CardContainer>
            <HeaderContainer>
                Signup Form
            </HeaderContainer>
            <ProgressBar />
            <Outlet />
        </CardContainer>
    );
}
