package primeiroProjeto;

import java.util.Scanner;

public class Lista9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1 - Contador
        System.out.println("Exercício 1 - Contador:");
        int numero = 1;
        while (numero <= 10) {
            System.out.println(numero);
            numero++;
        }

        // 2 - Contagem regressiva
        System.out.println("\nExercício 2 - Contagem Regressiva:");
        int numero2 = 10;
        while (numero2 >= 1) {
            System.out.println(numero2);
            numero2--;
        }

        // 3 - Sequência numérica de 5 em 5
        System.out.println("\nExercício 3 - Sequência numérica de 5 em 5:");
        int numero3 = 0;
        while (numero3 <= 100) {
            System.out.println(numero3);
            numero3 += 5;
        }

        // 4 - Mensagem repetida
        System.out.println("\nExercício 4 - Mensagem:");
        int contadorMensagem = 1;
        while (contadorMensagem <= 5) {
            System.out.println("Eu gosto de Java");
            contadorMensagem++;
        }

        // 5 - Soma de números digitados
        System.out.println("\nExercício 5 - Soma de 5 números:");
        int soma = 0;
        int contador = 1;
        while (contador <= 5) {
            System.out.print("Digite um número: ");
            int valor = scanner.nextInt();
            soma = soma + valor;
            contador++;
        }
        System.out.println("Soma total = " + soma);

        // 6 - Validação de senha
        System.out.println("\nExercício 6 - Validação de senha:");
        int senha = 0;
        while (senha != 1234) {
            System.out.print("Digite a senha: ");
            senha = scanner.nextInt();
        }
        System.out.println("Senha correta! Acesso permitido.");

        // 7 - Contagem regressiva a partir de número informado
        System.out.println("\nExercício 7 - Contagem regressiva personalizada:");
        System.out.print("Digite um número inteiro positivo: ");
        int valor2 = scanner.nextInt();
        while (valor2 >= 1) {
            System.out.println(valor2);
            valor2--;
        }

        scanner.close();
    }
}
