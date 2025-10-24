package lista22;
public class Pizza {
    String sabor;
    String tamanho;
    boolean bordaRecheada;

    void preparar() {
        System.out.println("Preparando pizza de " + sabor + "...");
    }

    void assar() {
        System.out.println("Assando pizza tamanho " + tamanho + "...");
    }

    void mostrarInformacoes() {
        System.out.println("Sabor: " + sabor + ", Tamanho: " + tamanho + ", Borda Recheada: " + bordaRecheada);
    }
}