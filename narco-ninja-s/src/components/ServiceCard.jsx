function ServiceCard({ title, description, linkText, linkHref }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkHref}>{linkText}</a>
    </div>
  );
}

export default ServiceCard;