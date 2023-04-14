export default function Bai1b() {
    const handleClick = () => {
        console.log("Hello")
    }
  return (
    <div style={{display: "flex", marginLeft: '20px'}}>
      <div style={{marginRight: '20px'}}>
        <h1 onClick={handleClick} style={{cursor: 'pointer'}}>Hello World</h1>
        <p>My first paragraph</p>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <h2>DANH SÁCH LỚP HỌC</h2>
          <ol>
            <li>Nguyễn Ngọc Duy</li>
            <li>Tống Quang Anh</li>
            <li>Đinh Thu Loan</li>
            <li>Hà Văn Tiến</li>
            <li>Nguyễn Hải Đăng</li>
            <li>Nguyễn Tiến Quang</li>
            <li>Nguyễn Văn Chiến</li>
          </ol>
        </div>
        <div style={{marginTop: '50px'}}>
          <ol>
            <li>Cơm trưa</li>
            <ul>
              <li>Cơm chiên hải sản</li>
              <li>Cơm sườn non nấu cam</li>
              <li>Cơm canh chua cá lóc</li>
            </ul>
            <li>Tráng miệng trái cây</li>
            <ul>
              <li>Nho tươi</li>
              <li>Chuối</li>
              <li>Mận</li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}