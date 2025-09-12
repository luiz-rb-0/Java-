package primeiroProjeto;

import java.util.Scanner;

public class OperadoresLogicos2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in); // java.util

		System.out.println("Qual a sua idade");
		int idade = scanner.nextInt();
		System.out.println("Tem título de eleitor?");
		String resposta = scanner.next();

		if (idade >= 16 && resposta.equalsIgnoreCase("SIM")) {
			System.out.println("Pode votar");
		} else {
			System.out.println("Não pode votar");
		}

		int numero;
		System.out.println("Informe um número: ");
		numero = scanner.nextInt();
		// ou
		if (numero >= 10 || numero <= 20) {
			System.out.println("O número está no intervalo");
		} else {
			System.out.println("O número está fora");
		}

		System.out.println("Qual o valor da compra? ");
		double valor = scanner.nextDouble();
		System.out.println("é cliente VIP");
		boolean vip = scanner.nextBoolean();

		if (valor > 200 && vip == true) {
			double desconto = valor * 0.15;
			double valorFinal = valor - desconto;
			System.out.printf("Vai pagar: %.2f", valorFinal);
		} else {
			System.out.println("Não tem desconto");
		}

		System.out.println("Qual a sua idade? ");
		double idad = scanner.nextDouble();
		System.out.println("Possui experiência? ");
		boolean xp = scanner.nextBoolean();

		if (idad > 20 && idad < 40 && xp) {
			System.out.println("Inscrição aceita");
		} else {
			System.out.println("Inscriçao rejeitada");
		}
	
	// 1 - Classificação de Filme	
		
		System.out.println("Qual a sua idade? ");
		int id = scanner.nextInt();
		
		if(id < 16 && id > 70) {
			System.out.println("Classificação especial");
		} else {
			System.out.println("Classificação Regular");
		}
		
		//2 - Promoção de Produto
		
		System.out.println("Qual o valor do produto? ");
	  double vlr = scanner.nextDouble();
	  System.out.println("Qual a quantidade? ");
	  double qnt = scanner.nextDouble();
	  double pre = vlr * qnt;
	  
	  if (pre > 200 && qnt > 5) {
		  System.out.println("Desconto de 15%");
	double des = pre - (pre * 0.15);
	System.out.println(des);
			}
	  			  
		//3 - Alerta de Saúde
	  
	  System.out.println("Qual a frequência cardíaca? ");
	  int fre = scanner.nextInt();
	  System.out.println("Sente tontura? ");
	  boolean tont = scanner.nextBoolean();
	  
	  if (fre >= 200 && tont) {
		  System.out.println("Procure atendimento médico");
	  } else {
		  System.out.println("Sem sinais de alerta");
	  }
	  
	  //4 - Participação em Concurso
	  
	  System.out.println("Qual a sua idade? ");
	  int idade0 = scanner.nextInt();
	  System.out.println("É residente do Estado?  ");
	  boolean resid = scanner.nextBoolean();
	  
	  if (idade0 > 18 & idade0 < 30 && resid) {
		  System.out.println ("Elegível para o concurso");
	  } else {
		  System.out.println ("Não elegível para o concurso");
	  }
	  
	  //5 - Recompensa por Desempenho
	  
	  System.out.println("Qual o número de projetos concluídos? ");
	  int pro = scanner.nextInt();
	  System.out.println("E quantos erros reportados? ");
	  int err = scanner.nextInt();
	  
	  if (pro > 10 && err < 3) {
		  System.out.println ("Recompensa concedida");
	  } else {
		  System.out.println ("Sem recompensa");
	  }
	  
	 //6 - Autorização para Viagem
	  
	  System.out.println("Qual a sua idade? ");
	  int idade1 = scanner.nextInt();
	  System.out.println("Possui passaporte válido? ");
	  boolean pass = scanner.nextBoolean();
	  
	  if (idade1 > 18 && pass) {
		  System.out.println ("Viagem autorizada");
	  } else {
		  System.out.println ("Viagem não autorizada");
	  }
	  
	  //7 - Aprovação em Curso
	  
	  System.out.println("Qual a sua nota final? ");
	  int not = scanner.nextInt();
	  System.out.println("Qual o número de aulas assistidas? ");
	  int aul = scanner.nextInt();
	  
	  if (not < 69 && aul > 39) {
		  System.out.println ("Aprovado");
	  } else {
		  System.out.println ("Reprovado");
	  }
	  
	  //8 - Controle de Irrigação
	  
	  System.out.println("Qual a umidade do solo? ");
	  int umi = scanner.nextInt();
	  System.out.println("Qual a temperatura? ");
	  double tem = scanner.nextDouble();
	  
	  if (umi < 30 && tem > 30) {
		  System.out.println ("Irrigação Necessária");
	  } else {
		  System.out.println ("Irrigação desnecessária");
	  }
	  
	  //9 - Inscrição
	  
	  System.out.println("Qual a sua idade? ");
	  int idade2 = scanner.nextInt();
	  System.out.println("Possui experiência prévia? ");
	  boolean exp = scanner.nextBoolean();
	  
	  if (idade2 > 19 & idade2 < 41 && exp) {
		  System.out.println ("Inscrição Aceita");
	  } else {
		  System.out.println ("Inscrição não permitida");
	  }
	  
	  }
		}
		

