package primeiroProjeto;

import java.util.Scanner;

public class Retorno {

	public class Funcoes {

	    // 1 - Soma
	    public static int somar(int a, int b) {
	        return a + b;
	    }

	    // 2 - Subtração
	    public static int subtrair(int a, int b) {
	        return a - b;
	    }

	    // 3 - Multiplicação
	    public static int multiplicar(int a, int b) {
	        return a * b;
	    }

	    // 4 - Divisão
	    public static String dividir(double a, double b) {
	        if (b == 0) {
	            return "Não é possível dividir por 0";
	        }
	        return String.valueOf(a / b);
	    }

	    // 5 - Média
	    public static double calcularMedia(double n1, double n2) {
	        return (n1 + n2) / 2;
	    }

	    // 6 - Verificar aprovação
	    public static String verificarAprovacao(double n1, double n2) {
	        double media = calcularMedia(n1, n2);
	        if (media >= 6) {
	            return "Aprovado";
	        } else {
	            return "Reprovado";
	        }
	    }

	    // 7 - Maior número
	    public static String maiorNumero(int a, int b) {
	        if (a > b) {
	            return String.valueOf(a);
	        } else if (b > a) {
	            return String.valueOf(b);
	        } else {
	            return "Eles são iguais";
	        }
	    }

	    // 8 - Celsius para Fahrenheit
	    public static double converterCelsiusParaFahrenheit(double celsius) {
	        return (celsius * 9 / 5) + 32;
	    }

	    // 9 - Área do retângulo
	    public static double calcularAreaRetangulo(double base, double altura) {
	        return base * altura;
	    }

	    // 10 - Mensagem com nome
	    public static String gerarMensagem(String nome) {
	        return "Olá, " + nome + "!";
	    }

	    // 11 - Juntar nomes
	    public static String juntarNomes(String nome1, String nome2) {
	        return nome1 + " " + nome2;
	    }

	    // 12 - Avaliar idade
	    public static String avaliarIdade(int idade) {
	        if (idade < 12) {
	            return "Criança";
	        } else if (idade < 18) {
	            return "Adolescente";
	        } else if (idade < 60) {
	            return "Adulto";
	        } else {
	            return "Idoso";
	        }
	    }

	    // Função principal (para testar)
	    public static void main(String[] args) {
	        System.out.println("Soma: " + somar(5, 3));
	        System.out.println("Subtração: " + subtrair(10, 4));
	        System.out.println("Multiplicação: " + multiplicar(6, 7));
	        System.out.println("Divisão: " + dividir(10, 2));
	        System.out.println("Divisão por 0: " + dividir(5, 0));
	        System.out.println("Média: " + calcularMedia(7.5, 6.5));
	        System.out.println("Aprovação: " + verificarAprovacao(5, 8));
	        System.out.println("Maior número: " + maiorNumero(9, 9));
	        System.out.println("Fahrenheit: " + converterCelsiusParaFahrenheit(25));
	        System.out.println("Área do retângulo: " + calcularAreaRetangulo(5, 3));
	        System.out.println(gerarMensagem("Luiz"));
	        System.out.println(juntarNomes("Luiz", "Roberto"));
	        System.out.println("Idade 15: " + avaliarIdade(15));
	    }
	}
