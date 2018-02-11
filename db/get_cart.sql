
SELECT *
FROM products 
INNER JOIN cart ON (products.id = cart.product_id);

