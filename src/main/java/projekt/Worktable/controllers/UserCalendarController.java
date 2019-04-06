package projekt.Worktable.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projekt.Worktable.entities.Usercalendar;
import projekt.Worktable.repositories.UserCalendarRepository;

@CrossOrigin
@RestController
@RequestMapping("/usercalendar")
public class UserCalendarController {
    @Autowired
    private UserCalendarRepository calendarRepository;


    @GetMapping("")
    public ResponseEntity<Iterable<Usercalendar>> getAll() {
        return ResponseEntity.ok(calendarRepository.findAll());
    }
}
