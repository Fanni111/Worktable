package projekt.Worktable.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Usercalendar implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer totalFreeDays;

    @Column(nullable = false)
    private String reason;

    @Column(nullable = false)
    private String response;

    @Column(nullable = true)
    private boolean acceptOrDecline;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User user;
}
