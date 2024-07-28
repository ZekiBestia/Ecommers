interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
  profileImg:string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  profileImg,
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
  } as const;

  return (
    <>
      <section className="mb-8">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask bg-black opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4">{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4">{full_description}</p>
                {profileImg && (
                  <div className="rounded-circle mx-auto d-block my-4" style={{ width: '330px', height: '330px', objectFit: 'cover' }}>
                    <img src={profileImg} alt="Profile" className="w-100 h-100 rounded-circle" />
                  </div>
                )}
                <button className="btn btn-white btn-lg">Contactame</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

