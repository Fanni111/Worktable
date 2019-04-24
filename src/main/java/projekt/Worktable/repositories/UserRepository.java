package projekt.Worktable.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projekt.Worktable.entities.User;

import java.util.Optional;

@Repository
/**
 * This is a repository for UserCalendar.
 * It has all the methods which required for the controller
 */
public interface UserRepository  extends CrudRepository<User, Integer> {
    Optional<User> findByUsername(String username);

}

