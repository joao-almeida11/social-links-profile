import BlogPreviewCardImage from "../../assets/images/illustration-article.svg";
import AvatarImage from "../../assets/images/image-avatar.webp";

export default function BlogPreviewCard() {
  return (
    <article className="blog-preview-card">
      <figure className="blog-preview-card--figure">
        <img
          src={BlogPreviewCardImage}
          height="200px"
          width="279px"
          alt="Default Preview Blog Card"
        />
      </figure>
      <div className="blog-preview-card--details">
        <ul className="blog-preview-card--details--tag-list">
          <li className="blog-preview-card--details--tag-list--tag text-preset-3-bold">
            Learning
          </li>
        </ul>
        <p className="blog-preview-card--details--date text-preset-3">
          Published 21 Dec 2023
        </p>
        {/* this would normaly be an h2 but since it's the only element on the page it's an h1 */}
        <h1 className="blog-preview-card--details--title text-preset-1">
          HTML & CSS foundations
        </h1>
        <p className="blog-preview-card--details--description text-preset-2">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="blog-preview-card--author">
        <figure className="blog-preview-card--author--avatar">
          <img src={AvatarImage} alt="Greg Hooper" width="32px" height="32px" />
        </figure>
        <p className="blog-preview-card--author--name text-preset-3-bold">
          Greg Hooper
        </p>
      </div>
    </article>
  );
}
