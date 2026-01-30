package br.com.abacatepay;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

@Configuration


public class AbacatePayConfig {
    @Value("${abacatepay.api-key}")
    private String apiKey;


    @Value("${abacatepay.base-url}")
    private String baseUrl;

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    public HttpHeaders buildHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        return headers;
    }

    public String getBaseUrl() {
        return baseUrl;
    }
}
