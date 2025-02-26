import React, { useState, useEffect } from "react";
import citiesIcon from "../../assets/Cities-icon.png";
import Paper from "../../Paper/Paper";
import Button from "../../components/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";
import propTypes from "prop-types";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from "./Cities.module.css";
import CityForm from "../../components/Forms/CityForm/CityForm";

import { citiesApi } from "../../api/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function Cities() {
  const [showForm, setShowForm] = useState(false);
  const [cities, setCities] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddCity = async (city) => {
    try {
      const response = await citiesApi.create({ name: city });
      setCities((prev) => [...prev, response.data]);
    } catch (error) {
      setError("A aparut o eroare la adaugarea orasului");
    }
    setShowForm(false);
  };

  const onDeleteCity = async (id) => {
    try {
      // nu avem nevoie de response
      await citiesApi.delete(id);
      setCities((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setError("A aparut o eroare la stergerea orasului");
    }
  };

  const onEditCity = async (id, newCity) => {
    try {
      const response = await citiesApi.update(id, { name: newCity });
      setCities((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      setError("A aparut o eroare la editarea orasului");
    }
  };
  // 1. daca vream sa folosim localStorage

  // useEffect(() => {
  //   if (cities) localStorage.setItem("cities", JSON.stringify(cities));
  // }, [cities]);

  // useEffect(() => {
  //   const localStorageCities = JSON.parse(localStorage.getItem("cities"));
  //   setCities(localStorageCities);
  // }, []);

  // 2. daca vrem sa folosim API
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await citiesApi.getAll();
        setCities(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Este o problema la cererea catre /cities");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.citiesContainer}>
      <div className={styles.cities}>
        <img src={citiesIcon} alt="Cities Icon" />
        <h1>CITIES</h1>
      </div>
      <div className={styles.city}>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {cities?.map((city, index) => {
              return (
                <Paper key={index}>
                  <InfoBlock
                    type={"CITY"}
                    id={city.id}
                    info={city.name}
                    onDelete={onDeleteCity}
                    onEdit={onEditCity}
                  />
                </Paper>
              );
            })}
          </>
        )}
      </div>
      {showForm && (
        <Paper>
          <CityForm onAddCity={onAddCity} />
        </Paper>
      )}
      <Button icon={<FaCirclePlus />} text={"ADD CITY"} onClick={onShowForm} />{" "}
    </div>
  );
}

Cities.propTypes = {
  cities: propTypes.arrayOf(propTypes.string).isRequired,
};
