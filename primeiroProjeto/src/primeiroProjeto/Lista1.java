package primeiroProjeto;

public class Lista1 {

	public static void main(String[] args) {
		
		System.out.println("-----------------------------------------------------------------\n");
		
		System.out.println("1 - Cálculo para empresa\n");
		
		double insta = 300.00;
		double limp = 150.00;
		double manut = 499.99;
		double total = insta + limp + manut;
		
	
		System.out.println("- Instalação: R$300.00");
		System.out.println("- Limpeza: R$150.00");		
		System.out.println("- Manutenção: 499.99\n");	
		
		System.out.println("Total: "+total+" reais");
		
		System.out.println("-----------------------------------------------------------------");
		
		
		
		
		
		System.out.println("2 - Cálculo de salário\n");
		
		double salar = 35.00;
		int hor = 8;
		double valor = salar * hor;
		
		System.out.println("Joaquim recebe "+valor+" reais por dia");
		
		System.out.println("-----------------------------------------------------------------");
		
		
		
		
		
		
		System.out.println("3 - Caixas de bombons\n");
		
		int bomb = 27;
		int caix = 16;
		int quantid = bomb * caix;
		
		System.out.println("Pamela tem "+quantid+" bombons ao todo");
		
		System.out.println("-----------------------------------------------------------------");
		
		
		
		
		
		System.out.println("4 - Garrafas de água\n");
		
		int garr = 300;
		int caixa = 20;
		int qntd = garr / caixa;
		
		System.out.println("A loja usou "+qntd+" caixas");
		
		System.out.println("-----------------------------------------------------------------");
		
		
		
		
		
		System.out.println("5 - Cálculo para camisetas\n");
		
		int camis = 120;
		int vend = 80;
		int prec = 30;
		int novascamis = 50;
		int totalcamis = (camis - vend) + novascamis;
		int totalprec = prec * totalcamis;
		
		System.out.println("A loja tem "+totalcamis+" camisas e faturou "+totalprec+" reais");
		
		System.out.println("-----------------------------------------------------------------");
		
		
		
		
		
		System.out.println("6 - Dobro e Metade\n");
		
		int numer = 17;
		int dobr = numer * 2;
		int metad = numer / 2;
		
		
		System.out.println("Número Escolhido: 17\n");
		System.out.println("Dobro do número: "+dobr);
		System.out.println("Metade do número: "+metad);
		
		System.out.println("-----------------------------------------------------------------");
	}

}
