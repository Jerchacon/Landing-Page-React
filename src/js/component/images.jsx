import React from 'react'


const Images = ({ imgs }) => {

  return (
    <div className='container d-flex p-0 my-3'>
      <div className="row">
        {
          imgs.map((el, i) => {

            return (
              <div className="col-md-3 col-sm-6 col-12" key={i}>
                <div className="card" >
                  <img src={el.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">{el.title}</h5>
                    <p className="card-text text">{el.description}</p>
                    <a href="#" className="btn btn-primary ">{el.label}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Images;