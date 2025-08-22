package primeiroProjeto;

import java.util.Scanner;

public class Lista4 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//1 - Verificar maioridade
		
        System.out.println("Informe a idade ");
        int idade = scanner.nextInt();
		if(idade >= 18) {
			System.out.println("Você é maior de idade");
		} else  {
			System.out.println("Você é menor de idade");
			
			//2 - Comparar dois números
			
			System.out.println("Informe um número");
	        int numero1 = scanner.nextInt();
	        System.out.println("Informe outro número");
	        int numero2 = scanner.nextInt();
	        if(numero1 > numero2) {
				System.out.println("O primeiro número é maior");
			} else  {
				System.out.println("O segundo número é maior ou eles são iguais");
		
		}
	        
	        //3 - Aprovação por nota
	        System.out.print("Digite a nota do aluno: ");
	        double nota = scanner.nextDouble();
	        
	        if (nota > 7.0) {
	            System.out.println("Aprovado: sua nota foi " + nota);
	        } else {
	            System.out.println("Reprovado: sua nota foi " + nota);
	        }
	        
	        //4 - Verificar número positivo
	        System.out.print("Digite um número: ");
	        double numero = scanner.nextDouble();
	        
	        if (numero > 0) {
	            System.out.println("O número é positivo.");
	        } else {
	            System.out.println("O número é negativo ou zero.");
	        }
	        
	        //5 - Cálculo de frete
	        System.out.print("Digite a distância de entrega em km: ");
	        double distancia = scanner.nextDouble();
	        double valorFrete;
	        
	        if (distancia <= 50) {
	            valorFrete = 10.00;
	        } else {
	            valorFrete = distancia * 0.5;
	        }
	        
	        System.out.println("Valor do frete: R$ "+ valorFrete);
	        
	        //6 - O Número é 10?
	        System.out.print("Digite um número: ");
	        int numeros = scanner.nextInt();
	        
	        if (numeros == 10) {
	            System.out.println("O número é 10.");
	        } else {
	            System.out.println("O número não é 10.");
	        }
	        
	        //7 - Desconto para Associados
	        System.out.print("Você é associado da loja? (sim/não): ");
	        String resposta = scanner.nextLine();
	        
	        if (resposta==("sim")) {
	            System.out.println("Você tem desconto.");
	        } else {
	            System.out.println("Você não tem desconto.");
	        }
	        
	        //8 - Cálculo de bônus por horas extras
	        System.out.print("Digite o número de horas extras trabalhadas: ");
	        int horasExtras = scanner.nextInt();
	        double bonus;
	        
	        if (horasExtras < 10) {
	            bonus = horasExtras * 20.00;
	        } else {
	            bonus = horasExtras * 15.00;
	        }
	        
	        System.out.println("Bônus por hora extra: R$ "+ bonus);

	}

	}
	}
