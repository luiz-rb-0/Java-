package lista22;
public class ProdutoP {
    public static void main(String[] args) {
        Produto p1 = new Produto();
        Produto p2 = new Produto();

        p1.nome = "Camisa";
        p1.preco = 49.90;
        p1.estoque = 10;

        p2.nome = "Tênis";
        p2.preco = 199.90;
        p2.estoque = 5;

        p1.vender(3);
        p1.mostrarInformacoes();

        p2.vender(6);
        p2.mostrarInformacoes();
    }
}
