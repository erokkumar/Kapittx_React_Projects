import { useEffect, useState } from "react";
import { fetchSchedule } from "../api/tvmaze";
import ShowCard from "../components/ShowCard";

function SchedulePage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchedule()
      .then(data => {
        setShows(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container"><p>Loading Schedule...</p></div>;

  return (
    <div>
      <nav className="nav-header">
        <div className="logo">Kapittx</div>
      </nav>

      <div className="container">
        <div className="grid-layout">
          {shows.slice(0, 24).map(item => (
            <ShowCard
              key={item.id}
              show={item.show}
              airtime={item.airtime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
