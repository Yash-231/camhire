import shortVid from './video/c405e59f2114f36defe07f92a771d9a5.mp4'


export const Header = (props) => {
  return (
    <header id='header'>


      <div className='intro'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-6'>

          </div>
        </div>
      </div>
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%,-50%)",
            zIndex : "-1"

        }}>
        <source src={ shortVid } type="video/mp4" />
      </video>
      <div className='overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 intro-text'>
              <h1>
                {props.data ? props.data.title : 'Loading'}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              <a
                href='#features'
                className='btn btn-custom btn-lg page-scroll'
              >
                Learn More
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
    </header >
  )
}
