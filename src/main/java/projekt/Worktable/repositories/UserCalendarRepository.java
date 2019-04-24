package projekt.Worktable.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projekt.Worktable.entities.Usercalendar;

@Repository
/**
 * This is a repository for UserCalendar.
 * It has all the methods which required for the controller
 */
public interface UserCalendarRepository extends CrudRepository<Usercalendar, Integer> {
    //Optional<Usercalendar> findByUsername(String username);

}