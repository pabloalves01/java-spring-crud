package br.com.abacatepay.controller;

import br.com.abacatepay.dto.CustomerRequest;
import br.com.abacatepay.service.CustomerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/create")
    public String criarCliente(@RequestBody CustomerRequest request) {
        return customerService.criarCliente(
                request.getName(),
                request.getCellphone(),
                request.getEmail(),
                request.getTaxId()
        );
    }
}
