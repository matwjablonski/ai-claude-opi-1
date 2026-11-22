package com.taskflow.task;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<TaskResponse> list(TaskStatus status) {
        List<Task> tasks = status == null
                ? repository.findAllByOrderByIdAsc()
                : repository.findByStatusOrderByIdAsc(status);
        return tasks.stream().map(TaskResponse::from).toList();
    }

    @Transactional
    public TaskResponse create(TaskRequest request) {
        Task task = new Task(request.title(), request.description());
        return TaskResponse.from(repository.save(task));
    }

    @Transactional
    public TaskResponse update(long id, TaskRequest request) {
        Task task = find(id);
        task.setTitle(request.title());
        task.setDescription(request.description());
        return TaskResponse.from(task);
    }

    @Transactional
    public TaskResponse changeStatus(long id, TaskStatus status) {
        if (status == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Status is required");
        }
        Task task = find(id);
        task.setStatus(status);
        return TaskResponse.from(task);
    }

    @Transactional
    public void delete(long id) {
        Task task = find(id);
        repository.delete(task);
    }

    private Task find(long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
    }
}
