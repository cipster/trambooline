package com.rainsoftware.trambooline.domain.repository;

import com.rainsoftware.trambooline.domain.model.Ride;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RideRepository extends BaseEntityRepository<Ride> {
    @RestResource
    @Query("SELECT e " +
            " FROM #{#entityName} e " +
            " WHERE " +
            " ( ?#{ #deleted == null } = true OR e.deleted = :deleted) " +
            "  AND ( ?#{ T(org.springframework.util.StringUtils).hasText(#search) } = false " +
            "       OR lower(e.name) LIKE concat('%', lower(cast(:search text)), '%') )")
    Page<Ride> filter(@Param(value = "deleted") Boolean deleted,
                      @Param(value = "search") String search,
                      Pageable pageable);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource
    <S extends Ride> S save(S entity);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource
    Optional<Ride> findById(Long aLong);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource
    void deleteById(Long aLong);
}
