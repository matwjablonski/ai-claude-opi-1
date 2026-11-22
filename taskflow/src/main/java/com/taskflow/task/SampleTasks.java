package com.taskflow.task;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SampleTasks {
    @Bean
    CommandLineRunner sampleData(TaskRepository repository) {
        return args -> {
            if (repository.count() > 0) return;
            repository.save(new Task("Przygotować agendę", "Wysłać wersję roboczą zespołowi"));
            Task review = new Task("Przejrzeć API", "Sprawdzić kontrakty endpointów");
            review.setStatus(TaskStatus.IN_PROGRESS);
            repository.save(review);
            Task done = new Task("Utworzyć repozytorium", "Projekt warsztatowy");
            done.setStatus(TaskStatus.DONE);
            repository.save(done);
        };
    }
}
