import React from 'react'
import '../styles/Home.scss'
import vg from '../assets/2.webp'

import { AiFillGoogleCircle, AiFillYoutube,AiFillAmazonCircle,AiFillInstagram,} from "react-icons/ai" ;
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
      <h1>ZoneUp</h1>
      <p>Unlock your potentials</p>

      </main>
    
    </div>
    <div className="home2">
      <img src={vg} alt="graphics"/>
      <div>
        <p>
        Discover a world-class learning experience that combines cutting-edge technology with expert instruction. Our interactive platform offers engaging lessons, real-time feedback, and personalized support, ensuring an immersive and effective educational journey.
        </p>
      </div>
    </div>

    <div className='home3' id='about'>
      <div>
      <h1>Who we are?</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste maiores expedita earum dolore! Hic sunt ipsa explicabo labore. Nesciunt ullam sapiente magni neque velit aperiam libero laudantium doloribus doloremque voluptatibus, facilis, in dolores fugiat non sequi culpa blanditiis amet eos? Reiciendis sint, debitis iure corporis deleniti maxime ipsa officia aliquid totam atque quibusdam recusandae dicta, tempore soluta reprehenderit eligendi, quis possimus doloremque accusamus consequatur tempora. Perspiciatis sint non harum possimus nulla animi nam ea blanditiis! Esse ducimus explicabo quis obcaecati est, iusto eius quidem repellat provident et alias molestias ipsam totam optio, sit aliquam aspernatur eveniet sint, rerum voluptate eos reprehenderit minus! Atque itaque incidunt, blanditiis laboriosam laudantium porro illo, ullam eum ad perferendis animi explicabo in mollitia inventore veniam recusandae velit error eveniet et ab voluptas ex tempora? Enim nemo minus reprehenderit consequuntur saepe harum laborum esse quis iusto eum corporis animi nihil tempora qui officiis blanditiis rem ducimus nesciunt, molestias amet temporibus! Nostrum adipisci maxime aut assumenda ea doloremque placeat libero..</p>
      </div>
    </div>

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home