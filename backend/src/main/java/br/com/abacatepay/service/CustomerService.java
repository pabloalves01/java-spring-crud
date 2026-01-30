package br.com.abacatepay.service;

import br.com.abacatepay.dto.CustomerRequest;
import br.com.abacatepay.AbacatePayConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CustomerService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private AbacatePayConfig config;

    public String criarCliente(String name, String cellphone, String email, String taxId) {
        String url = config.getBaseUrl() + "/customer/create";

        CustomerRequest body = new CustomerRequest(name, cellphone, email, taxId);

        HttpEntity<CustomerRequest> request = new HttpEntity<>(body, config.buildHeaders());
        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

        if (response.getStatusCode() == HttpStatus.CREATED || response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            throw new RuntimeException("Failed to create customer: " + response.getBody());
        }
    }

}
