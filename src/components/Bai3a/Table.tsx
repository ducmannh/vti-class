import styled from "styled-components";

export default function Table() {
  return (  
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <TH>MÃ</TH>
            <TH>TÊN</TH>
            <TH>Số lượng</TH>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#E8E8E8" }}>
            <TD>Sản phẩm 1</TD>
            <TD>sp2017</TD>
            <TD>20</TD>
          </tr>
          <tr>
            <TD>Sản phẩm 2</TD>
            <TD>sp2016</TD>
            <TD>20</TD>
          </tr>
          <tr>
            <TD>Sản phẩm 3</TD>
            <TD>sp2015</TD>
            <TD>20</TD>
          </tr>
        </tbody>
      </table>
  );
}
export const TH = styled.th`
  border: 1px solid black;
  padding: 10px;
  width: 100vw;
`;
export const TD = styled.td`
  border: 1px solid black;
  padding: 10px;
  width: 100vw;
`;
