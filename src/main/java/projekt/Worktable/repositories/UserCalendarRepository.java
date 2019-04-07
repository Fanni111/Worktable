package projekt.Worktable.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projekt.Worktable.entities.Usercalendar;

@Repository
public interface UserCalendarRepository extends CrudRepository<Usercalendar, Integer> {
    //Optional<Usercalendar> findByUsername(String username);

}