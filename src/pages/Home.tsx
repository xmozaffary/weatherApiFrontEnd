import { useEffect, useState } from "react";
import { get } from "../service/serviceBase";
import { ICoordinates } from "../model/ICoordinated";

export const Home = () => {
  const [coordinates, seyCoordinates] = useState<ICoordinates[] | null>(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const res = await get<ICoordinates[]>(
        "http://localhost:8080/coordinates/london"
      );

      seyCoordinates(res);
    };

    console.log("test");

    getCoordinates();
  }, []);

  return (
    <>
      <main className="home">
        {coordinates && (
          <>
            <p>{coordinates[0]?.name}</p>
            <p>{coordinates[0]?.country}</p>
          </>
        )}
      </main>
    </>
  );
};
