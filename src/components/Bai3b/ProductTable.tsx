import "../../App.css";
export default function ProductTable() {
  return (
    <div style={{border: '2px solid green', marginTop: '10px'}}>
      <div className="div1">
        <p style={{fontWeight: 'bold'}}>Name</p>
        <p style={{fontWeight: 'bold'}}>Price</p>
      </div>

      <div>
        <p style={{lineHeight: '0px', fontWeight: 'bold'}}>Sporting goods</p>
        <div className="div2">
          <div>
            <p>Football</p>
            <p>Baseball</p>
            <p style={{color: 'red'}}>Basketball</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p>$49.99</p>
            <p>$9.99</p>
            <p>$29.99</p>
          </div>
        </div>
        <p style={{lineHeight: '0px', fontWeight: 'bold'}}>Electronics</p>
        <div className="div2">
          <div>
            <p>iPodTouch</p>
            <p style={{color: 'red'}}>iPhone5</p>
            <p>Nexus7</p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p>$49.99</p>
            <p>$9.99</p>
            <p>$29.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
