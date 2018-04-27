package com.rainsoftware.trambooline.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;

@Configuration
@EnableJpaAuditing
@EnableJpaRepositories(basePackages = {"com.rainsoftware.trambooline.domain.repository"})
public class GlobalPersistenceConfig {

    @Bean
    public SpelAwareProxyProjectionFactory spelAwareProxyProjectionFactory() {
        return new SpelAwareProxyProjectionFactory();
    }
}
