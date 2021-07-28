package cliente;

import java.util.Date;

public class PessoaJuridica extends Pessoa {
	
	private String nomeEmpresa;
	private Date dataAbertura;
	private String cnpj;
	private String segmentoAtuacao;
	
	public PessoaJuridica() {
		super();
	}
	public PessoaJuridica(String nomeEmpresa, Date dataAbertura, String cnpj, String segmentoAtuacao) {
		super();
		this.nomeEmpresa = nomeEmpresa;
		this.dataAbertura = dataAbertura;
		this.cnpj = cnpj;
		this.segmentoAtuacao = segmentoAtuacao;
	}
	public String getNomeEmpresa() {
		return nomeEmpresa;
	}
	public void setNomeEmpresa(String nomeEmpresa) {
		this.nomeEmpresa = nomeEmpresa;
	}
	public Date getDataAbertura() {
		return dataAbertura;
	}
	public void setDataAbertura(Date dataAbertura) {
		this.dataAbertura = dataAbertura;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getSegmentoAtuacao() {
		return segmentoAtuacao;
	}
	public void setSegmentoAtuacao(String segmentoAtuacao) {
		this.segmentoAtuacao = segmentoAtuacao;
	}
	
	

}
