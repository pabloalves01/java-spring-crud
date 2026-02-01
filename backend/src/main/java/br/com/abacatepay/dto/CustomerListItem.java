package br.com.abacatepay.dto;

public class CustomerListItem {
    private String id;
    private CustomerMetadata metadata;

    public CustomerListItem() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CustomerMetadata getMetadata() {
        return metadata;
    }

    public void setMetadata(CustomerMetadata metadata) {
        this.metadata = metadata;
    }
}
