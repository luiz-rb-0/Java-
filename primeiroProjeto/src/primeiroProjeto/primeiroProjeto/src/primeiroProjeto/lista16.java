package primeiroProjeto;

import java.util.Scanner;

public class lista16 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
//1 - Vetor de cores
		
        String[] cores = new String[6];
        System.out.println("Digite 6 cores:");
        for (int i = 0; i < cores.length; i++) {
            cores[i] = sc.nextLine();
        }
        System.out.println("Cores digitadas:");
        for (String cor : cores) {
            System.out.println(cor);
        }

//2 - Vetor de números decimais
        
        double[] numerosDecimais = new double[8];
        System.out.println("\nDigite 8 números decimais:");
        for (int i = 0; i < numerosDecimais.length; i++) {
            numerosDecimais[i] = sc.nextDouble();
        }
        System.out.println("Números digitados:");
        for (double num : numerosDecimais) {
            System.out.println(num);
        }

//3 - Mostrando apenas os pares
        
        int[] numeros = new int[10];
        System.out.println("\nDigite 10 números inteiros:");
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = sc.nextInt();
        }
        System.out.println("Números pares digitados:");
        for (int num : numeros) {
            if (num % 2 == 0) {
                System.out.println(num);
            }
        }

//4 - Menores que 50
        
        int[] numeros12 = new int[12];
        System.out.println("\nDigite 12 números inteiros:");
        for (int i = 0; i < numeros12.length; i++) {
            numeros12[i] = sc.nextInt();
        }
        for (int num : numeros12) {
            if (num < 50) {
                System.out.println(num + " é menor que 50");
            }
        }

 //5 - Procurando um nome
        
        sc.nextLine(); // limpar buffer
        String[] nomes = new String[5];
        System.out.println("\nDigite 5 nomes:");
        for (int i = 0; i < nomes.length; i++) {
            nomes[i] = sc.nextLine();
        }
        System.out.println("Digite um nome para procurar:");
        String nomeProcurado = sc.nextLine();
        boolean encontrado = false;
        for (String nome : nomes) {
            if (nome.equalsIgnoreCase(nomeProcurado)) {
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            System.out.println("Nome encontrado no vetor!");
        } else {
            System.out.println("Nome NÃO encontrado!");
        }

//6 - Produto e preço
        
        String[] produtos = new String[4];
        double[] precos = new double[4];
        System.out.println("\nDigite 4 produtos e seus preços:");
        for (int i = 0; i < produtos.length; i++) {
            System.out.print("Produto " + (i+1) + ": ");
            produtos[i] = sc.nextLine();
            System.out.print("Preço: ");
            precos[i] = sc.nextDouble();
            sc.nextLine(); // limpar buffer
        }
        for (int i = 0; i < produtos.length; i++) {
            System.out.println("O produto " + produtos[i] + " custa R$" + precos[i]);
        }

//7 - Verificação de notas
        double[] notas = new double[6];
        System.out.println("\nDigite 6 notas:");
        for (int i = 0; i < notas.length; i++) {
            notas[i] = sc.nextDouble();
        }
        for (double nota : notas) {
            if (nota < 6) {
                System.out.println(nota + " -> aluno reprovado");
            } else if (nota >= 6 && nota < 7) {
                System.out.println(nota + " -> aluno em recuperação");
            } else {
                System.out.println(nota + " -> aluno aprovado");
            }
        }

//8 - Promoção de ingressos
        
        double[] ingressos = new double[5];
        System.out.println("\nDigite 5 preços de ingressos:");
        for (int i = 0; i < ingressos.length; i++) {
            ingressos[i] = sc.nextDouble();
        }
        for (double ingresso : ingressos) {
            if (ingresso > 100) {
                System.out.println("Ingresso de R$" + ingresso + " -> Promoção disponível!");
            }
        }
	}
}