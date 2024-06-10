import { useState, useEffect } from "react";
import { type Tour, tourSchema } from "./types";
const url = "https://www.course-api.com/react-tours-project";

function Component() {
  const [tours, setTour] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ocorrido em carregar os dados!");
        }
        const rawData: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);
        if (!result.success) {
          console.log(result.error.message);
          throw new Error("Erro ao acessar os dados!");
        }
        setTour(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Erro corrido ao acessa API";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error {error}</h2>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;
