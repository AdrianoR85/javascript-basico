package application;

import cliente.PessoaFisica;

public class Programa {

	public static void main(String[] args) {
		
		PessoaFisica pf = new PessoaFisica();
		pf.setNome("Adriano");
		
		System.out.println(pf.getNome());

	}

}
