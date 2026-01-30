package br.com.dev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"br.com.dev", "br.com.abacatepay"})
public class DevApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevApplication.class, args);
	}

}
