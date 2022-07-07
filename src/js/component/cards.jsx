import React from "react";
import '/Repositorio/first-landing-page-with-react/src/styles/cards.css';
import image from '/Repositorio/first-landing-page-with-react/src/img/image.png';

const Cards = () => {
  return (
   
      <div className="container" >
        <div className="row">
          <div className="col-sm my-3">
            <div className="card">
              <img class="card-img-top" src={image} alt="Card image"></img>
              <div class="card-body">
                <h4 class="card-title">card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis fugit aspernatur inventore, ipsa incidunt doloremque quam nesciunt quibusdam ab, iste dolore. Quam esse voluptate error alias perspiciatis rerum exercitationem!</p>
                <a href="#" class="btn btn-primary">Fine Out More!</a>
              </div>
            </div>
          </div>
          <div className="col-sm my-3">
            <div className="card">
              <img class="card-img-top" src={image} alt="Card image"></img>
              <div class="card-body">
                <h4 class="card-title">card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis fugit aspernatur inventore, ipsa incidunt doloremque quam nesciunt quibusdam ab, iste dolore. Quam esse voluptate error alias perspiciatis rerum exercitationem!</p>
                <a href="#" class="btn btn-primary">Fine Out More!</a>
              </div>
            </div>
          </div>
          <div className="col-sm my-3">
            <div className="card">
              <img class="card-img-top" src={image} alt="Card image"></img>
              <div class="card-body">
                <h4 class="card-title">card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis fugit aspernatur inventore, ipsa incidunt doloremque quam nesciunt quibusdam ab, iste dolore. Quam esse voluptate error alias perspiciatis rerum exercitationem!</p>
                <a href="#" class="btn btn-primary">Fine Out More!</a>
              </div>
            </div>
          </div>
          <div className="col-sm my-3">
            <div className="card">
              <img class="card-img-top" src={image} alt="Card image"></img>
              <div class="card-body">
                <h4 class="card-title">card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quis fugit aspernatur inventore, ipsa incidunt doloremque quam nesciunt quibusdam ab, iste dolore. Quam esse voluptate error alias perspiciatis rerum exercitationem!</p>
                <a href="#" class="btn btn-primary">Fine Out More!</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    
  );
};

export default Cards;