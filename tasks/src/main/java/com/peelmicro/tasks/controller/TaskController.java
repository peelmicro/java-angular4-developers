package com.peelmicro.tasks.controller;

import com.peelmicro.tasks.domain.Task;
import com.peelmicro.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping( value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}
