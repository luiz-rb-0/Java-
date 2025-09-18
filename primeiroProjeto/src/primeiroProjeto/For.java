package primeiroProjeto;

import java.util.Scanner;

public class For {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		//mostrando os numeros ate 10
		for(int cont = 0; cont <= 10; cont++) {
			System.out.println(cont);
		}
		
		//mostrando uma mensagem 
		for(int texto = 1; texto <= 3; texto++) {
			System.out.println("Hoje é Quinta ");
			
		}
		System.out.println("----------------");
		
		for(int voltas = 1; voltas <= 5; voltas++) {
			System.out.println("Qual seu salário? ");
			double salario = scanner.nextDouble();
			if(salario <= 1500) {
			    System.out.println("Você terá um aumento");
			} else {
			    System.out.println("sem aumento");
			}
			
			int soma = 0;
			for(int vez = 1; vez <= 5; vez++) {
			    System.out.println("Informe um valor");
			    int valor = scanner.nextInt();
			    soma = soma + valor; //soma += valor
			}
			System.out.println("O resultado da soma é: " + soma);
		}
	}

}