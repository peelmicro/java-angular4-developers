package com.peelmicro.tasks.service;

import com.peelmicro.tasks.domain.Task;

public interface TaskService {

   Iterable<Task> list();

   Task save(Task task);

}
