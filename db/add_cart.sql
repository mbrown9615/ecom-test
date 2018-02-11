
INSERT INTO cart (products, product_id, quantity)
VALUES
($1, $2, 1);
SELECT * FROM cart;