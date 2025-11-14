package lista25;

public class MainConta {
	public static void main(String[] args) {
		Conta c1 = new ContaPoupanca(1000);
		Conta c2 = new ContaInvestimento(1000);

		System.out.println("Rendimento poupança: R$ " + c1.calcularRendimento());
		System.out.println("Rendimento investimento: R$ " + c2.calcularRendimento());
	}
}
