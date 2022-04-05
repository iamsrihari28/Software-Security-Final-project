package com.asu.project.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asu.project.hospital.entity.PatientQuery;

public interface PatientQueryRepository extends JpaRepository<PatientQuery, Long>{

}
