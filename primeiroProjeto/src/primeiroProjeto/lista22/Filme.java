package lista22;
public class Filme {
    String titulo;
    String genero;
    int duracao;

    void assistir() {
        System.out.println("Assistindo " + titulo + "...");
    }

    void mostrarInformacoes() {
        System.out.println("Título: " + titulo + ", Gênero: " + genero + ", Duração: " + duracao + " min");
    }
}
