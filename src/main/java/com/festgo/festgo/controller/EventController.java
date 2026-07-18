package com.festgo.festgo.controller;

import com.festgo.festgo.model.Event;
import com.festgo.festgo.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/events")

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175"
})

public class EventController {


    @Autowired
    private EventService service;



    // CREATE EVENT
    @PostMapping
    public Event addEvent(@RequestBody Event event) {

        return service.addEvent(event);

    }




    // GET ALL EVENTS
    @GetMapping
    public List<Event> getAllEvents() {

        return service.getAllEvents();

    }





    // GET EVENT BY ID
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {

        return service.getEventById(id);

    }





    // UPDATE EVENT
    @PutMapping("/{id}")
    public Event updateEvent(
            @PathVariable Long id,
            @RequestBody Event event) {


        return service.updateEvent(id, event);

    }





    // DELETE EVENT
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {


        service.deleteEvent(id);


        return "Event deleted successfully";

    }

}