
export default function HomeCard(props:any) {
  const {text,imgSrc,imgAlt,imgTitle,cardId,name,job} = props;
  return (
    <article className={`card-${cardId}`}>
  <div className="card__content">
    <p className="card__text">{text}</p>
    <div className="card__flex-container">
      <div className="card__img-container img-container">
        <img
          src={imgSrc}
          alt={imgAlt}
          title={imgTitle}
          role="img"
          className="img card__image"
        />
      </div>
      <div>
        <p className="card__text--bold">{name}</p>
        <p className="card__text--small">{job}</p>
      </div>
    </div>
  </div>
</article>
  )
}
