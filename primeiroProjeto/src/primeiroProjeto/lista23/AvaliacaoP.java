package lista23;

import java.util.Scanner;

public class AvaliacaoP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Avaliacao av = new Avaliacao();

        System.out.print("Digite o nome do aluno: ");
        av.setNome(sc.nextLine());

        System.out.print("Digite a nota 1: ");
        av.setNota1(sc.nextDouble());

        System.out.print("Digite a nota 2: ");
        av.setNota2(sc.nextDouble());

        System.out.println("\nAluno: " + av.getNome());
        System.out.println("Média: " + av.calcularMedia());

   
    }
}

