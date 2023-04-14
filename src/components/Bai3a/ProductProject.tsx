import styled from "styled-components";
import Table, { TD } from "./Table";

export default function ProductProject() {
  return (
    <div style={{ border: "1px solid gray", padding: "20px" }}>
      <p style={{ marginTop: "0px" }}>Sản phẩm</p>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <table>
          <tbody>
            <tr>
              <TD style={{ width: "400px" }}>Sản phẩm 3</TD>
              <TD style={{ width: "200px" }}>sp2015</TD>
              <TD style={{ width: "200px" }}>20</TD>
              <Button style={{ marginLeft: "20px" }}>Thêm </Button>
              <Button>Sửa</Button>
              <Button>Xóa sản phẩm</Button>
            </tr>
          </tbody>
        </table>
      </div>
      <Table />
    </div>
  );
}

export const Button = styled.button`
  width: 120px;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
