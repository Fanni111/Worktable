package projekt.Worktable.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projekt.Worktable.entities.User;

import java.util.Optional;

@Repository
public interface UserRepository  extends CrudRepository<User, Integer> {
    Optional<User> findByUsername(String username);

}

