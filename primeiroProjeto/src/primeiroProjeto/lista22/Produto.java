package lista22;
public class Produto {
    String nome;
    double preco;
    int estoque;

    void vender(int quantidade) {
        if (quantidade <= estoque) {
            estoque -= quantidade;
            System.out.println("Venda realizada: " + quantidade + " unidade(s) de " + nome);
        } else {
            System.out.println("Estoque insuficiente!");
        }
    }

    void mostrarInformacoes() {
        System.out.println("Produto: " + nome + ", Preço: R$" + preco + ", Estoque: " + estoque);
    }
}
