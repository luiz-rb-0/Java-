package lista22;
public class PizzaP {
    public static void main(String[] args) {
        Pizza p1 = new Pizza();
        Pizza p2 = new Pizza();

        p1.sabor = "Calabresa";
        p1.tamanho = "Grande";
        p1.bordaRecheada = true;

        p2.sabor = "Frango com Catupiry";
        p2.tamanho = "Média";
        p2.bordaRecheada = false;

        p1.preparar();
        p1.assar();
        p1.mostrarInformacoes();

        p2.preparar();
        p2.assar();
        p2.mostrarInformacoes();
    }
}
