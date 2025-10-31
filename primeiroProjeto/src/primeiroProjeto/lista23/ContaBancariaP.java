package lista23;

import java.util.Scanner;

public class ContaBancariaP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ContaBancaria conta = new ContaBancaria();

        System.out.print("Nome do titular: ");
        conta.setTitular(sc.nextLine());

        System.out.print("Valor para depósito: ");
        conta.depositar(sc.nextDouble());

        System.out.print("Valor para saque: ");
        conta.sacar(sc.nextDouble());

        System.out.println("\nTitular: " + conta.getTitular());
        System.out.println("Saldo final: R$" + conta.getSaldo());

    }
}
