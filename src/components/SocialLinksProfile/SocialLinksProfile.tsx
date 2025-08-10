import Button from "../Button/Button";
import AvatarImage from "../../assets/images/avatar-jessica.jpeg";

export default function SocialLinksProfile() {
  return (
    <section className="social-links-profile">
      <figure className="social-links-profile--figure">
        <img
          src={AvatarImage}
          alt="Jessica Randall"
          height="80px"
          width="80px"
        />
      </figure>
      <header className="social-links-profile--header">
        <h1 className="social-links-profile--header--title text-preset-1">
          Jessica Randall
        </h1>
        <p className="social-links-profile--header--location text-preset-2-bold">
          London, United Kingdom
        </p>
      </header>
      <p className="social-links-profile--description text-preset-2">
        "Front-end developer and avid reader."
      </p>
      <div className="social-links-profile--socials-list">
        <Button aria-label="Visit Jessica's GitHub profile">GitHub</Button>
        <Button aria-label="Visit Jessica's Frontend Mentor profile">
          Frontend Mentor
        </Button>
        <Button aria-label="Visit Jessica's LinkedIn profile">LinkedIn</Button>
        <Button aria-label="Visit Jessica's Twitter profile">Twitter</Button>
        <Button aria-label="Visit Jessica's Instagram profile">
          Instagram
        </Button>
      </div>
    </section>
  );
}
