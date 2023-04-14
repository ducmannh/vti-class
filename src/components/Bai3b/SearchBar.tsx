import '../../App.css'

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search..." style={{fontSize: '20px'}}/><br />
      <input type="checkbox" />Only show products in stock
    </div>
  );
}