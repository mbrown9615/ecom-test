CREATE TABLE IF NOT EXISTS  products (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    product_name VARCHAR,
    img TEXT,
    price INTEGER
)