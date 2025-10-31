package lista23;

import java.util.Scanner;

public class RetanguloP {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Retangulo r1 = new Retangulo();

        System.out.print("Digite a largura do retângulo: ");
        r1.setLargura(sc.nextDouble());

        System.out.print("Digite a altura do retângulo: ");
        r1.setAltura(sc.nextDouble());

        System.out.println("\nÁrea: " + r1.calcularArea());
        System.out.println("Perímetro: " + r1.calcularPerimetro());
    }
}

