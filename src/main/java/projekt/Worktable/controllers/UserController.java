package projekt.Worktable.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import projekt.Worktable.entities.User;
import projekt.Worktable.repositories.UserRepository;
import projekt.Worktable.security.AuthenticatedUser;

import java.util.Optional;
/**
 * This is a controller for users.
 * You can get-, post- and put mapping
 */
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticatedUser authenticatedUser;

    /**
    * It is a get mapping method for all users
     * @return a ResponseEntity
     */
    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    /**
     * It is a get mapping method for user by its id
     * @param id the user's generated id
     * @return a ResponseEntity
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * It is a post mapping method which register(add) a new user
     * @param user is a new User entity
     * @return a ResponseEntity
     */
    @PostMapping("register")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    /**
     * It is a post mapping method to login users
     * @return a ResponseEntity
     */
    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return ResponseEntity.ok(authenticatedUser.getUser());
    }

}
