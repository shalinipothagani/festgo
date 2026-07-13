package com.festgo.festgo.service;

import com.festgo.festgo.model.Event;
import com.festgo.festgo.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository repo;

    // Add Event
    public Event addEvent(Event event) {
        return repo.save(event);
    }

    // Get All
    public List<Event> getAllEvents() {
        return repo.findAll();
    }

    // Get By ID
    public Event getEventById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // Update
    public Event updateEvent(Long id, Event newEvent) {
        Event event = repo.findById(id).orElse(null);

        if (event != null) {
            event.setName(newEvent.getName());
            event.setDate(newEvent.getDate());
            event.setVenue(newEvent.getVenue());
            return repo.save(event);
        }
        return null;
    }

    // Delete
    public void deleteEvent(Long id) {
        repo.deleteById(id);
    }
}