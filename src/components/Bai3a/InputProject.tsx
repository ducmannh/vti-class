import styled from "styled-components";

export default function InputProject() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
      <div>
        <P>Tên dự án</P>
        <Input type="text" placeholder="Nhập Tên Dự Án" />
        <P>Ngày bắt đầu</P>
        <input
          type="text"
          style={{
            backgroundColor: "#E8E8E8",
            border: "1px solid gray",
            padding: "5px",
          }}
        />
        <P>Ngày kết thúc</P>
        <input type="text" style={{ padding: "5px" }} />
      </div>

      <div>
        <P>Mã dự án</P>
        <Input type="text" placeholder="Nhập Mã Dự Án" />
        <P>Tên Khách Hàng</P>
        <Input type="text" placeholder="Nhập Mã Dự Án" />
        <P>Ghi chú</P>
        <Input type="text" placeholder="Ghi chú" />
      </div>
    </div>
  );
}

export const P = styled.p`
  line-height: 0px;
`;
export const Input = styled.input`
  width: 30vw;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
`;
