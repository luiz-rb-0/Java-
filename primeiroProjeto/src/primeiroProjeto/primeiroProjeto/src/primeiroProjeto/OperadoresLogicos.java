package primeiroProjeto;

import java.util.Scanner;

public class OperadoresLogicos {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in); //java.util
				
				System.out.println("Qual sua idade? ");
		int idade = scanner.nextInt();
				System.out.println("Você tem ingresso? (true/false): ");
		boolean ingresso = scanner. nextBoolean();
		

		if(idade >= 18 && ingresso) {
	    System.out.println("Entrada Permitida");
	    } else {
	    System.out.println("Entrada Negada");
		}
		
		System.out.println("-----------------------------------------");
		System.out.println("Qual sua nota? (0 a 10)");
		double nota = scanner.nextDouble();
		System.out.println("Qual sua frequência (0 a 10)");
		int frequencia = scanner.nextInt();
		
		if(nota >= 7 || frequencia >= 75) {
		System.out.println("Aprovado");
		} else {
			System.out.println("Reprovado");
		}
		System.out.println("-----------------------------------------");
		/*Para logar o usuário precisa rsponder uma serie de perguntas, * se ele é administrador e se está logado*/
		System.out.println("É admin? (true/false)");
		boolean admin = scanner.nextBoolean();
		boolean logado = scanner.nextBoolean();
	
		if(admin && logado) {
			System.out.println("Acesso permitido");
		} else {
			System.out.println("Acesso Negado");
		}
		
		System.out.println("-----------------------------------------");
		}
	}


