package cliente;

import java.util.Date;

public abstract class Pessoa {
	protected String nome;
	protected String sobrenome;
	protected Date dataNascimento;
	protected String telefone;
	protected String email;
	protected Endereco endereco = new Endereco();
	
	public Pessoa() {
		super();
	}


	public Pessoa(String nome, String sobrenome, Date dataNascimento, String telefone, String email,
			Endereco endereco) {
		super();
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataNascimento = dataNascimento;
		this.telefone = telefone;
		this.email = email;
		this.endereco = endereco;
	}


	public Date getDataNascimento() {
		return dataNascimento;
	}



	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}



	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = (Endereco) endereco;
	}
	
	
}
