import styled from "styled-components"

export default function ButtonProject() {
    return(
        <Div>
            <Button>Hủy</Button>
            <Button>Thêm Mới</Button>
        </Div>
    )
};

export const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: blue;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    color: white;
`
export const Div = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
`