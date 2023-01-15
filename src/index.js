import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = () => {
  return (
    <form>
      <input type='text' placeholder='Search...' />
      <p>
        <input type='checkbox' />
        {' '}
        <span style={{ color: 'green', fontSize: 'smaller' }}>
          Only show products in stock
        </span>
      </p>
    </form>
  )
}

const FilterableProductTable = props => {
  const { products } = props;

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <SearchBar />
      ProductTable goes here

    </div>
  );
};

const PRODUCTS = [
	{	category: "Sporting Goods",
			 price: "$49.99",
		 stocked: true,
				name: "Football" },
	{	category: "Sporting Goods",
			 price: "$9.99",
		 stocked: true,
				name: "Baseball" },
	{	category: "Sporting Goods",
			 price: "$29.99",
		 stocked: false,
				name: "Basketball" },
	{	category: "Electronics",
			 price: "$99.99",
		 stocked: true,
				name: "iPod Touch" },
	{	category: "Electronics",
			 price: "$399.99",
		 stocked: false,
				name: "iPhone 5" },
	{	category: "Electronics",
			 price: "$199.99",
		 stocked: true,
				name: "Nexus 7" }
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />, document.getElementById('root')
);
















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
