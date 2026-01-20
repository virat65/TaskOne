import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <div className="container subscribe-section ">
        <div className="row">
          <div className="col-12">
            <h3>Subscribe to get information, latest news and</h3>
            <h3>other interesting offers about Cobham</h3>
            <form action="">
              <input
                type="text"
                placeholder="Your email"
                className="text-center "
              />
              <button type="button" class="btn subscribe-btn text-white fw-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe
