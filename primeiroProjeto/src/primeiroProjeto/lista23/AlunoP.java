package lista23;

import java.util.Scanner;

public class AlunoP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Aluno aluno = new Aluno();

        System.out.print("Digite o nome do aluno: ");
        aluno.setNome(sc.nextLine());

        System.out.print("Digite a idade do aluno: ");
        aluno.setIdade(sc.nextInt());

        System.out.println("\nDados do Aluno");
        System.out.println("Nome: " + aluno.getNome());
        System.out.println("Idade: " + aluno.getIdade());

    }
}
