package com.rainsoftware.trambooline;

import com.rainsoftware.trambooline.config.ApplicationConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({ApplicationConfig.class})
public class TramboolineApplication {

    public static void main(String[] args) {
        SpringApplication.run(TramboolineApplication.class, args);
    }
}
