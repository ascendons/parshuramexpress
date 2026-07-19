import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div
        className="service-card-img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>
        <Link href={link} className="service-card-link">
          Read More
        </Link>
      </div>
    </div>
  );
}
