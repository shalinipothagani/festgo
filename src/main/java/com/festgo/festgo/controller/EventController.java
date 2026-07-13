package com.festgo.festgo.controller;

import com.festgo.festgo.model.Event;
import com.festgo.festgo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService service;

    // Create
    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return service.addEvent(event);
    }

    // Read All
    @GetMapping
    public List<Event> getAll() {
        return service.getAllEvents();
    }

    // Read by ID
    @GetMapping("/{id}")
    public Event getById(@PathVariable Long id) {
        return service.getEventById(id);
    }

    // Update
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event) {
        return service.updateEvent(id, event);
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {
        service.deleteEvent(id);
        return "Event deleted successfully";
    }
}