import styled from "styled-components";

const Container = styled.div`

    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .animationLoading {
        font-size: 50px;
        animation: animationExec infinite 1.2s linear;
    }

    @keyframes animationExec {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
}

`

export default Container;