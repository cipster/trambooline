package com.rainsoftware.trambooline.domain.model;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import java.math.BigDecimal;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@DynamicUpdate
@Table(name = "ride")
@GenericGenerator(
        name = BaseEntity.Constants.SEQ_GENERATOR,
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
                @Parameter(name = "sequence_name", value = Ride.SEQUENCE_NAME),
                @Parameter(name = "initial_value", value = "1"),
                @Parameter(name = "increment_size", value = "1")
        }
)
public class Ride extends BaseEntity {
    public static final String SEQUENCE_NAME = "ride_id_seq";

    @NotBlank
    private String name;

    @NotNull
    private Long duration;

    @NotNull
    private BigDecimal price;

    private Long capacity;

    private Boolean notify;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getCapacity() {
        return capacity;
    }

    public void setCapacity(Long capacity) {
        this.capacity = capacity;
    }

    public Boolean getNotify() {
        return notify;
    }

    public void setNotify(Boolean notify) {
        this.notify = notify;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), getName(), getDuration(), getPrice(), getCapacity(), getNotify());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ride)) return false;
        if (!super.equals(o)) return false;
        Ride ride = (Ride) o;
        return Objects.equals(getName(), ride.getName()) &&
                Objects.equals(getDuration(), ride.getDuration()) &&
                Objects.equals(getPrice(), ride.getPrice()) &&
                Objects.equals(getCapacity(), ride.getCapacity()) &&
                Objects.equals(getNotify(), ride.getNotify());
    }
}
