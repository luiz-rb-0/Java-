package primeiroProjeto;

import java.util.Scanner;

public class Lista6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1 - Intervalo numérico
        System.out.println("Exercício 1 - Intervalo numérico");
        System.out.print("Digite um número: ");
        int num = scanner.nextInt();
        if (num >= 10 && num <= 20) {
            System.out.println("Número dentro do intervalo");
        } else {
            System.out.println("Fora do intervalo");
        }
        System.out.println("---------------");

        // 2 - Acesso à festa
        System.out.println("Exercício 2 - Acesso à festa");
        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();
        scanner.nextLine(); // limpar buffer
        System.out.print("Possui convite (sim/não)? ");
        String convite = scanner.nextLine();
        if (idade >= 18 && convite.equalsIgnoreCase("sim")) {
            System.out.println("Entrada permitida.");
        } else {
            System.out.println("Entrada não permitida.");
        }
        System.out.println("---------------");

        // 3 - Categoria de esporte
        System.out.println("Exercício 3 - Categoria de esporte");
        System.out.print("Digite sua idade: ");
        idade = scanner.nextInt();
        if (idade < 12 || idade > 60) {
            System.out.println("Categoria especial");
        } else {
            System.out.println("Categoria normal");
        }
        System.out.println("---------------");

        // 4 - Desconto no produto
        System.out.println("Exercício 4 - Desconto no produto");
        System.out.print("Digite o valor do produto: ");
        double valor = scanner.nextDouble();
        scanner.nextLine(); // limpar buffer
        System.out.print("Forma de pagamento (avista/cartao): ");
        String pagamento = scanner.nextLine();
        if (valor > 100 && pagamento.equalsIgnoreCase("avista")) {
            valor = valor * 0.9; // 10% desconto
        }
        System.out.println("Valor final: " + valor);
        System.out.println("---------------");

        // 5 - Triagem médica
        System.out.println("Exercício 5 - Triagem médica");
        System.out.print("Digite sua temperatura: ");
        double temp = scanner.nextDouble();
        scanner.nextLine();
        System.out.print("Possui sintomas (sim/não)? ");
        String sintomas = scanner.nextLine();
        if (temp >= 38 || sintomas.equalsIgnoreCase("sim")) {
            System.out.println("Recomenda-se procurar um médico.");
        } else {
            System.out.println("Sem sinais preocupantes.");
        }
        System.out.println("---------------");

        // 6 - Votação
        System.out.println("Exercício 6 - Votação");
        System.out.print("Digite sua idade: ");
        idade = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Você é brasileiro (sim/não)? ");
        String brasileiro = scanner.nextLine();
        if (idade >= 16 && brasileiro.equalsIgnoreCase("sim")) {
            System.out.println("Pode votar.");
        } else {
            System.out.println("Não pode votar.");
        }
        System.out.println("---------------");

        // 7 - Bônus de funcionário
        System.out.println("Exercício 7 - Bônus de funcionário");
        System.out.print("Digite horas extras: ");
        int horasExtras = scanner.nextInt();
        System.out.print("Digite número de faltas: ");
        int faltas = scanner.nextInt();
        if (horasExtras > 20 && faltas < 5) {
            System.out.println("Ganhou bônus!");
        } else {
            System.out.println("Não ganhou bônus.");
        }
        System.out.println("---------------");

        // 8 - Autorização para dirigir
        System.out.println("Exercício 8 - Autorização para dirigir");
        System.out.print("Digite sua idade: ");
        idade = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Possui carteira de motorista (sim/não)? ");
        String carteira = scanner.nextLine();
        if (idade >= 18 && carteira.equalsIgnoreCase("sim")) {
            System.out.println("Pode dirigir.");
        } else {
            System.out.println("Não pode dirigir.");
        }
        System.out.println("---------------");

        // 9 - Bolsa de estudos
        System.out.println("Exercício 9 - Bolsa de estudos");
        System.out.print("Digite sua nota média (0 a 10): ");
        double nota = scanner.nextDouble();
        System.out.print("Digite sua frequência (0 a 100): ");
        int freq = scanner.nextInt();
        if (nota >= 8 && freq >= 80) {
            System.out.println("Bolsa concedida");
        } else {
            System.out.println("Bolsa não concedida");
        }
        System.out.println("---------------");

        // 10 - Climatização
        System.out.println("Exercício 10 - Verificação de Temperatura Ambiente");
        System.out.print("Digite a temperatura (°C): ");
        double temperatura = scanner.nextDouble();
        System.out.print("Digite a umidade (%): ");
        int umidade = scanner.nextInt();
        if ((temperatura < 18 || temperatura > 26) && umidade > 60) {
            System.out.println("Ajustar climatização");
        } else {
            System.out.println("Climatização não necessária");
        }

        scanner.close();
    }
}