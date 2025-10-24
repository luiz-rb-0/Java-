package lista22;
public class MusicaP {
    public static void main(String[] args) {
        Musica m1 = new Musica();
        Musica m2 = new Musica();
        Musica m3 = new Musica();

        m1.titulo = "Imagine";
        m1.artista = "John Lennon";
        m1.duracao = 3.5;

        m2.titulo = "Shape of You";
        m2.artista = "Ed Sheeran";
        m2.duracao = 4.0;

        m3.titulo = "Bohemian Rhapsody";
        m3.artista = "Queen";
        m3.duracao = 5.9;

        m1.tocar();
        m1.mostrarDetalhes();

        m2.tocar();
        m2.pausar();
        m2.mostrarDetalhes();

        m3.tocar();
        m3.mostrarDetalhes();
    }
}
