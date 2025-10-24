package lista22;
public class FilmeP {
    public static void main(String[] args) {
        Filme f1 = new Filme();
        Filme f2 = new Filme();
        Filme f3 = new Filme();

        f1.titulo = "Inception";
        f1.genero = "Ficção Científica";
        f1.duracao = 148;

        f2.titulo = "Titanic";
        f2.genero = "Romance";
        f2.duracao = 195;

        f3.titulo = "Vingadores: Ultimato";
        f3.genero = "Ação";
        f3.duracao = 181;

        f1.assistir();
        f1.mostrarInformacoes();

        f2.assistir();
        f2.mostrarInformacoes();

        f3.assistir();
        f3.mostrarInformacoes();
    }
}
