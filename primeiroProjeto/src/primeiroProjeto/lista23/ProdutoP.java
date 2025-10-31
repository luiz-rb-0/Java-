package lista23;

import java.util.Scanner;

public class ProdutoP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Produto p1 = new Produto();
        Produto p2 = new Produto();

        System.out.print("Digite o nome do produto 1: ");
        p1.setNome(sc.nextLine());
        System.out.print("Preço do produto 1: ");
        p1.setPreco(sc.nextDouble());
        System.out.print("Estoque do produto 1: ");
        p1.setEstoque(sc.nextInt());
        sc.nextLine();

        System.out.print("\nDigite o nome do produto 2: ");
        p2.setNome(sc.nextLine());
        System.out.print("Preço do produto 2: ");
        p2.setPreco(sc.nextDouble());
        System.out.print("Estoque do produto 2: ");
        p2.setEstoque(sc.nextInt());

        System.out.println("\nProdutos Cadastrados");
        System.out.println(p1.getNome() + " - R$" + p1.getPreco() + " - Estoque: " + p1.getEstoque());
        System.out.println(p2.getNome() + " - R$" + p2.getPreco() + " - Estoque: " + p2.getEstoque());

    }
}
