public class MyClass {
  public static void main(String args[]) {

//1 - Cálculo para empresa 

double instalacao = 300.00;
double limpeza = 150.00;
double manutencao = 499.99;
double total = instalacao + limpeza + manutencao;
System.out.println("A pagar para a empresa " + total);

// 2 - Cálculo de salário

double dinheiro = 35.00;
double hora = 8;
double total2 = dinheiro * hora;
System.out.println("Pagamento total " + total2);

//3 - Caixas de Bombons

double caixa = 16.00;
double unidades = 27.00;
double total3 = caixa * unidades;
System.out.println("Quantidade de bombons " + total3);

//4 - Garrafas de água

double garrafas = 300.00;
double caixas = 20;
double total4 = garrafas / caixas;
System.out.println("Pagamento total " + total4);

//5 - Cálculo para camisetas

double camisetas_inicial = 120;
double camisetas_vendidas = 80;
double camisetas_novas = 50;
double camisetas_valor = 30;
double camisetas_quantidade = camisetas_inicial - camisetas_vendidas + camisetas_novas;
double lucro = camisetas_vendidas * camisetas_valor;
System.out.println("A quantidade de camisetas é " + camisetas_quantidade);
System.out.println("O lucro foi de " + lucro);
}
}