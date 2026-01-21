import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchShowDetails } from "../api/tvmaze";

function ShowDetailPage() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchShowDetails(id)
            .then(data => {
                setShow(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!show) return <p>Show not found</p>;

    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>&larr; Back</Link>
            <h1>{show.name}</h1>
            {show.image && <img src={show.image.medium} alt={show.name} />}
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <p><b>Language:</b> {show.language}</p>
            <p><b>Genres:</b> {show.genres.join(", ")}</p>
        </div>
    );
}

export default ShowDetailPage;
