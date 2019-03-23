import React, { Fragment } from 'react'

export default function ContactUsPage(props) {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">

            <div className="tile is-parent is-vertical">

              <div className="tile is-parent ">

                <div className="tile is-child">
                  With all the questions/comments please <a href="mailto:someone@yoursite.com?subject=Mail from The Game Site">Email Me</a>. Thank you!
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    </Fragment>
  )
}
