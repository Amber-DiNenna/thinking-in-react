import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ProductCategoryRow = props => {
  const { product } = props;
  return (
    <tr>
      <th>
        {product.category}
      </th>
    </tr>
  );
};

const ProductRow = props => {
  const { product } = props;
  const coloredName = product.stocked ?
    product.name :
    <span style={{ color: 'red' }}>{product.name}</span>;

  return(
    <tr>
      <td>{coloredName}</td><td align='right'>{product.price}</td>
    </tr>
  );
};

const ProductTable = props => {
  const { filterText, inStockOnly, products } = props;
  const rows = [];
  let lastCategory = null;


  products.forEach(product => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          product={product}
          key={product.category}
        />
        );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table width='100%'>
      <thead>
        <tr style={{ color: 'blue' }}>
          <th align='left'>Name</th><th align='right'>Price</th>
        </tr>

      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

const SearchBar = props => {
  const {
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange

  } = props;

  return (
    <form>
      <input
      type='text'
      placeholder='Search...'
      value={filterText}
      onChange={event => onFilterTextChange(event.target.value)}
      />
      <p>
        <input
        type='checkbox'
        checked={inStockOnly}
        onChange={event => onInStockOnlyChange(event.target.checked)}
        />
        {' '}
        <span style={{ color: 'green', fontSize: 'smaller' }}>
          Only show products in stock
        </span>
      </p>
    </form>
  );
};

const FilterableProductTable = props => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const { products } = props;

  const handleFilterTextChange = filterText => {
    setFilterText(filterText);
  };

  const handleInStockOnlyChange = inStockOnly => {
    setInStockOnly(inStockOnly);
  };


  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
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
