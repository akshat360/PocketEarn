import stayproductive from "../../assets/images/illustration-stay-productive.png";

const HeroHome=() => {
    return (
      <section  className="demo">
      <div  className="demo__content">
        <div  className="demo__flex-container">
          <div  className="demo__img-container img-container">
            <img
              src={stayproductive}
              alt="Color illustration showing three people working and sharing files for live collaboration"
              title="Stay productive illustration"
              role="img"
               className="img"
            />
          </div>
          <div  className="demo__text-container">
            <h2  className="demo__title">Stay productive, wherever you are</h2>
            <p  className="demo__description">
              Never let location be an issue when accessing your files. Fylo has you
              covered for all of your file storage needs.
            </p>
            <p  className="demo__description">
              Securely share files and folders with friends, family and colleagues
              for live collaboration. No email attachments required.
            </p>
            <a href="#"  className="demo__link">
              See how Fylo works
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                 className="demo__icon icon"
              >
                <title>Right pointing arrow</title>
                <desc>
                  An icon of a black arrow pointing rightwards inside of a light
                  green circle
                </desc>
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(2 2)">
                    <use fill="#000" filter="url(#a)" 
                    // xlink:href="#b"
                     />
                    <use fill="#62E0D9" 
                    // xlink:href="#b" 
                    />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="#1B2330"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    );
}

export default HeroHome;