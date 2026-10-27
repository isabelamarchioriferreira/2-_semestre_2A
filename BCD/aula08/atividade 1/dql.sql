SELECT * FROM produtos;
SELECT * FROM pedido;
--1 Junte os pedidos com seus respectivos produtos
SELECT p.*, pr.* FROM pedido p JOIN produto pr ON p.id_produto = pr.id;
