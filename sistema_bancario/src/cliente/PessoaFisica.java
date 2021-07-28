package cliente;

public class PessoaFisica extends Pessoa{
	private String cpf;
	private String profissao;
	private Double valorRenda;
	
	public PessoaFisica() {
		super();
	}

	public PessoaFisica(String cpf, String profissao, Double valorRenda) {
		super();
		this.cpf = cpf;
		this.profissao = profissao;
		this.valorRenda = valorRenda;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}

	public Double getValorRenda() {
		return valorRenda;
	}

	public void setValorRenda(Double valorRenda) {
		this.valorRenda = valorRenda;
	}

	
	
}
