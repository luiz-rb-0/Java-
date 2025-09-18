package primeiroProjeto;

import java.util.Scanner;

public class Lista5 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		//1 - Classificação de idade
		
		
				System.out.println("Qual a sua idade? ");
				int idade;
				idade = scanner.nextInt();
				if(idade < 12) {
				System.out.println("Você é uma criança ");
				} else if(idade < 17) {
                	System.out.println("Você é adolescente");
                } else if(idade <59) {
                	System.out.println("Você é adulto");
                } else {
                	System.out.println("Você é idoso");
                }
				
				//2 - Avaliação de Temperatura
				
				System.out.println("Qual a temperaura? ");
				int temperatura;
				temperatura = scanner.nextInt();
				if(temperatura < 10) {
				System.out.println("Está muito frio ");
				} else if(temperatura < 20) {
                	System.out.println("Está frio");
                } else if(temperatura <30) {
                	System.out.println("Está agradável");
                } else {
                	System.out.println("Está muito quente");
                }
				
				//3 - Sistema de Notas Escolares
				
				System.out.println("Qual a sua nota? ");
				int nota;
				nota = scanner.nextInt();
				if(nota < 60) {
				System.out.println("Nota F ");
				} else if(nota < 70) {
                	System.out.println("Nota D");
                } else if(nota <80) {
                	System.out.println("Nota C");
                }else if(nota < 90) {
                	System.out.println("Nota B");
                } else {
                	System.out.println("Nota A");
                }
				
				//4 - Verificação de senha
				
				System.out.println("Qual a senha? ");
				String senha;
				senha = scanner.next();
				if(senha.equals("admin")) {
				System.out.println("Acesso permitido ");
                } else {
                	System.out.println("Acesso negado");
                }
				
				//5 - comparação de nomes
				
				System.out.println("DIgite um nome");
				String nome1;
				String nome2;
				nome1 = scanner.next();
				nome2 = scanner.next();
				if(nome1.equals(nome2)) {
				System.out.println("Os nomes são iguais ");
                } else {
                	System.out.println("Os nomes são diferentes");
                }
				
				//6 - Jogo da cor favorita
				
				System.out.println("Qual a sua cor favorita? ");
				String cor;
				cor = scanner.next();
				if(cor.equals("Azul")) {
				System.out.println("Boa escolha ");
				} else if(cor.equals("Vermelho")) {
                	System.out.println("Cor vibrante");
                } else if(cor.equals("Verde")) {
                	System.out.println("Cor da Natureza");
                } else {
                	System.out.println("Cor não cadastrada");
                }
				
				//7 - Verificação de vogal
				
				System.out.println("Digite uma letra ");
				String letra;
				letra = scanner.next();
				if(letra.equals("a")) {
				System.out.println("É uma vogal ");
				} else if(letra.equals("e")) {
				System.out.println("É uma vogal ");
				} else if(letra.equals("i")) {
				System.out.println("É uma vogal ");
				} else if(letra.equals("o")) {
				System.out.println("É uma vogal ");
				} else if(letra.equals("u")) {
				System.out.println("É uma vogal ");
                } else {
                	System.out.println("Não é vogal");
                }
	}

}
