import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import './Product.css';

const ProductPage = ({URL,Heading}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // The API endpoint has been updated here
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [URL]);

    if (loading) return <div className="loading-message">Loading products...</div>;
    if (error) return <div className="error-message">Error: {error}</div>;

    return (
        <>
            <h2 className="mt-4 styledFont text-4xl text-center mb-3" style={{fontSize:"40px"}}> {Heading} </h2>
            <div className="product-page">
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductPage;