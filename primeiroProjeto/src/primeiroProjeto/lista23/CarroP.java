package lista23;

import java.util.Scanner;

public class CarroP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Carro c1 = new Carro();

        System.out.print("Digite o modelo do carro: ");
        c1.setModelo(sc.nextLine());

        System.out.print("Digite o ano do carro: ");
        c1.setAno(sc.nextInt());

        System.out.print("Valor para acelerar (km/h): ");
        c1.acelerar(sc.nextInt());

        System.out.print("Valor para frear (km/h): ");
        c1.frear(sc.nextInt());

        System.out.println("\nModelo: " + c1.getModelo());
        System.out.println("Ano: " + c1.getAno());
        System.out.println("Velocidade final: " + c1.getVelocidadeAtual() + " km/h");

    }
}

