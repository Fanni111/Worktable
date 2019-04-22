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
/**
 * This is a controller for users' calendar.
 * You can get-(, post- and put) mapping
 */
public class UserCalendarController {
    @Autowired
    private UserCalendarRepository calendarRepository;

    /**
     * This is a get mapping for all calendars.
     * @return a ResponseEntity
     */
    @GetMapping("")
    public ResponseEntity<Iterable<Usercalendar>> getAll() {
        return ResponseEntity.ok(calendarRepository.findAll());
    }
}
