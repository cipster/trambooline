package com.rainsoftware.trambooline.domain.repository;

import com.rainsoftware.trambooline.domain.model.BaseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@NoRepositoryBean
@Transactional(propagation = Propagation.REQUIRED)
@RepositoryRestResource
public interface BaseEntityRepository<T extends BaseEntity> extends JpaRepository<T, Long> {
    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    List<T> findAll();

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    List<T> findAll(Sort sort);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    <S extends T> List<S> saveAll(Iterable<S> iterable);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    void flush();

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    <S extends T> S saveAndFlush(S entity);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    void deleteInBatch(Iterable<T> entities);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    void deleteAllInBatch();

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    T getOne(Long aLong);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    Page<T> findAll(Pageable pageable);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    <S extends T> S save(S entity);

    @Override
    @RestResource(exported = false)
    Optional<T> findById(Long aLong);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    long count();

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    void delete(T entity);

    /**
     * {@inheritDoc}
     */
    @Override
    @RestResource(exported = false)
    void deleteAll();

    /**
     * Returns the value of the version field of the entity with id {@code aLong}.
     * This is needed during custom updates to ensure that the entity is actually updated: if version is null
     * hibernate produces an insert instead.
     */
    @RestResource(exported = false)
    @Query("select version from #{#entityName} e where e.id = ?1")
    Long findVersionById(Long aLong);
}
