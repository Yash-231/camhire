export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 data-aos-duration="1000" data-aos="fade-up">Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i  data-aos="fade-up" data-aos-duration="1000" className={d.icon}></i>
                  <h3  data-aos="fade-up" data-aos-duration="1000">{d.title}</h3>
                  <p  data-aos="fade-up" data-aos-duration="1000">{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
