package lista22;
import java.util.Scanner;

public class GatoP {

	public static void main(String[] args) {
		 
		Scanner sc = new Scanner(System.in);
		
		
		
		Gato gato = new Gato();
		System.out.println("Qual o nome do gato? ");
		gato.nome = sc.next();
		
		System.out.println("Qual a raça do gato? ");
		gato.raca = sc.next();
		
		System.out.println("Qual a idade do gato? ");
		gato.idade = sc.next();
		
	gato.miar();
	gato.comer();
	gato.animal();
		
	}

}
