package lista22;

public class Gato {

	String nome;
	String raca;
	String idade;
	
	void miar() {
		System.out.println("Miau!");
	}
	
	void comer() {
		System.out.println(nome+", está comendo");
	}
	
	void animal() {
		
		System.out.println("A raça do "+ nome +" é "+ raca +" e sua idade é " + idade);
	}
}
