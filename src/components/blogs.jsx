import Card from "./Card-2";


export const Blogs = (props) => {
  return (
    <div id='blogs' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" data-aos-duration="1000">Blogs</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'> 
          {props.data
            ? props.data.map((d, i) => (
          <div key={`${d.title}-${i}`} className="col-md-6" data-aos='fade-up' data-aos-duration='1000'>
            <Card
              title={d.title}
              imageUrl={d.imageUrl}
              body={d.body}
            />
          </div>
))
: 'loading'}
        </div>
      </div>
    </div>
  )
}