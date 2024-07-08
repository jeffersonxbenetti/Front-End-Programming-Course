import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TodoList = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        list-style: none;
    }
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    border: 2px solid #D1D3D466;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding-left: 20px;
    margin-right: 30px;
    outline: none;
`

export const Button = styled.button`
    background: #8052EC;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 17px;
    font-weight: 900;
    border: none;
    cursor: pointer;
    transition: 800ms;

    &:hover {
        background-color: white;
        color: #8052EC;
        border: 1px solid #8052EC;
    }

    &:active{
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${(props) => (props.isFinished ? '#e8ff8b' : '#e4e4e4')};
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const NotList = styled.h3`
    text-align: center;
    margin-top: 30px;
    color: red;
    font-size: 30px;
`