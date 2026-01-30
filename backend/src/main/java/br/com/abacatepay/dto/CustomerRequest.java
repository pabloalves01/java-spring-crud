package br.com.abacatepay.dto;

public class CustomerRequest {
    private String name;
    private String cellphone;
    private String email;
    private String taxId;

    public CustomerRequest() {}

    public CustomerRequest(String name, String cellphone, String email, String taxId) {
        this.name = name;
        this.cellphone = cellphone;
        this.email = email;
        this.taxId = taxId;
    }

    public String getName() {
        return name;
    }

    public String getCellphone() {
        return cellphone;
    }
    
    public String getEmail() {
        return email;
    }

    public String getTaxId() {
        return taxId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setTaxId(String taxId) {
        this.taxId = taxId;
    }
}
