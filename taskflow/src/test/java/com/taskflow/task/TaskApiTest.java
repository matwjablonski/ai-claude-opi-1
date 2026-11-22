package com.taskflow.task;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class TaskApiTest {
    @Autowired
    MockMvc mvc;

    @Test
    void createsEditsAndDeletesTask() throws Exception {
        String location = mvc.perform(post("/api/tasks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"title":"Nowe zadanie","description":"Opis"}
                                """))
                .andExpect(status().isCreated())
                .andExpect(header().exists("Location"))
                .andExpect(jsonPath("$.title").value("Nowe zadanie"))
                .andExpect(jsonPath("$.status").value("TODO"))
                .andReturn().getResponse().getHeader("Location");

        mvc.perform(put(location).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Zmienione\",\"description\":\"Nowy opis\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Zmienione"));

        mvc.perform(patch(location + "/status").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"DONE\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("DONE"));

        mvc.perform(delete(location)).andExpect(status().isNoContent());
        mvc.perform(delete(location)).andExpect(status().isNotFound());
    }

    @Test
    void filtersTasksByStatus() throws Exception {
        mvc.perform(get("/api/tasks?status=DONE"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].status").value("DONE"));
    }
}
