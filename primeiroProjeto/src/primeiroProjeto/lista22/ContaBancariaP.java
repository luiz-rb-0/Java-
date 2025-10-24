package lista22;
public class ContaBancariaP {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria();

        conta.titular = "Maria";
        conta.saldo = 1000.00;

        conta.depositar(500.00);
        conta.sacar(300.00);
        conta.mostrarSaldo();
    }
}
