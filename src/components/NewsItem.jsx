import image from "../assets/project_image.jpg";

const NewsItem = ({ title, description, src, url, author }) => {
  // Displaying fetched data to card display
  return (
    // Formatting card display background & page fit
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "325px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "310px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 44) + "..."}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 88) + "..."
            : "News is unavailable at this time."}
        </p>
        <h6 className="card-subtitle mb-2 text-secondary">{author ? author : "Unknown"}</h6>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
