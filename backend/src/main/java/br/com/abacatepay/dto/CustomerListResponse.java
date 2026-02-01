package br.com.abacatepay.dto;
import java.util.List;

public class CustomerListResponse {
    private List<CustomerListItem> data;
    private String error;

    public CustomerListResponse() {}

    public List<CustomerListItem> getData() {
        return data;
    }

    public void setData(List<CustomerListItem> data) {
        this.data = data;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }


    
}
