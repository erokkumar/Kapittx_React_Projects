import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSchedule } from "../api/tvmaze";

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

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Currently Airing Shows (US)</h2>

            {shows.slice(0, 20).map(item => (
                <div key={item.id}>
                    <p>
                        <b>
                            <Link to={`/show/${item.show.id}`}>{item.show.name}</Link>
                        </b>
                    </p>
                    <p>Time: {item.airtime}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SchedulePage;
