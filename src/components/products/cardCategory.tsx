interface Props {
    thumb_src: string;
    title: string;
    collection: string;
    classList: string;
    cta: string;
    link:string;
  }
  
  
  export default function CardProduct({
    thumb_src,
    title,
    collection,
    classList,
    cta,
    link,
  }: Props) {
  
    const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );
  
    return (
      <a href={link}>
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${thumb_src})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <p className="text-white font-weight-bold mb-1">{collection}</p>
              <h4 className="text-white font-weight-bolder">{title}</h4>
              {cta && <a href={link} className="text-white text-sm font-weight-semibold mb-0">Comprar productos &#62;</a>}
            </div>
          </div>
        </div>
      </a>
    );
  }