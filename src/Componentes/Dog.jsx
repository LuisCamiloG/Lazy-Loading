import React from "react";
import useSWR from "swr";
import { Card } from "../Componentes/Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Dog = () => {
    const { data, error } = useSWR(
        "https://api.thedogapi.com/v1/images/search",
        fetcher
    );

    if (error) return <div>falló al cargar</div>;
    if (!data) return <div>Cargando....</div>;

    return data.map((e) => <Card url={e.url} />);
};

export default Dog;