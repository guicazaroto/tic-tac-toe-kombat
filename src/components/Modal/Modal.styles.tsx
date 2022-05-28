import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  width: 100%;
  height: 100%;
`

export const ModalBody = styled.div`
  padding-top: 2rem;
  background-color: #fff;
  width: 350px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 150px;
    margin-bottom: 1rem;
  }
`

export const ModalTitle = styled.h1`
  font-size: 2rem;
  background: -webkit-linear-gradient(#fc2c03, #eb9b34);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`