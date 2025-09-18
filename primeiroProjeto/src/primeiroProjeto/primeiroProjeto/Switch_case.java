package primeiroProjeto;

import java.util.Scanner;

public class Switch_case {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in); // java.util

		System.out.println("  digite um numero e veja uma cor");
		int numero = scanner.nextInt();

		switch (numero) {
		case 1:
			System.out.println("Vermelho");
			break;

		case 2:
			System.out.println("Azul");
			break;
		default:
			System.out.println("Valor incorreto");}

			System.out.println("Qual a categoria você pertence?");
			String categoria = scanner.next();
			switch (categoria.toUpperCase()) {
			case "A":
				System.out.println("Infantil");
				break;
			case "B":
				System.out.println("Juvenil");
				break;
			default:
				System.out.println("Categoria incorreta");

				System.out.println("escolha a operação matematica de doi numeros");
				String operacao = scanner.next();}

				switch (operacao) {
				case "+":
					int adicao = 5 + 5;
					System.out.println("adicao");
					break;

				
			case "-":
				int subtraçao = 5 - 5;
				System.out.println("subtracao");
				break;

			case "*":
				int multi = 5 * 5;
				System.out.println("multi");
				break;

			case "/":
				int divisaõ = 5 / 5;
				System.out.println("divisão");
				break;
			default:
				System.out.println("operação incorreta");}
				
			}
		}
	


