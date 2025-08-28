package primeiroProjeto;

import java.util.Scanner;

public class Biblioteca {

	public static void main(String[] args) {
		
		//print
		
		System.out.print("olá");
		System.out.print("mundo");
		//Println - Pula uma linha depois de mostrar o texto
		System.out.println("Olá");
		System.out.println("Mundo");
		//Printf - formatado
		int idade = 20;
		double salario = 2000.50;
		System.out.println("A idade é: " + idade);
		System.out.printf("A idade é: %d", idade);
		System.out.printf("A idade é %d e o salário é %f", idade , salario);
		System.out.println("A idade é" + idade + "e o salário é" + salario);
		
		// %s = String          %f = float e double   
		// %d = int             %c = char
		double valor = 8.7;
		System.out.printf("Valor %.2f",valor);
		
		
		System.out.println("\n\n");
//		Comparação de texto
		String senha = "1234";
		if(senha.equals("1234")) { //senha == "1234"
			System.out.println("Acesso Permitido");
		} else {
			System.out.println("Acesso Negado");
		}
		
		String palavra = "java";
		String palavra2 = "java";
		if(palavra.equals(palavra2)) {
			System.out.println("foi");
		} else {
			System.out.println("Não foi");
		}
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Informe uma palavra");
		String resposta = scanner.next();
		
		if(resposta.equalsIgnoreCase("Java")) {
			System.out.println("Acertou");
		}
		
		System.out.print("Informe uma cor: ");
		String cor = scanner.next();
		if(cor.equalsIgnoreCase("azul")) {
			System.out.println("Cor Azul");
		} else if (cor.equalsIgnoreCase("verde")) {
			System.out.println("A cor é verde");
		} else {
			System.out.println("Cor errada");
		}
		

		}
		
	}


