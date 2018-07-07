package com.peelmicro.tasks.repository;

import com.peelmicro.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
