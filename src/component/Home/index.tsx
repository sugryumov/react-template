import React from 'react';
import Helmet from 'react-helmet';
import './index.css';

function Home() {
  return (
    <main className="home">
      <Helmet title={'TS | React | Saga'} />

      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        reprehenderit rem neque voluptatibus officiis nisi sed ducimus velit
        nemo laborum suscipit, harum dolores minima! Ducimus, ex a quos veniam
        inventore commodi. Consequuntur aspernatur voluptate quibusdam, iste
        saepe expedita quam est cum blanditiis! Nisi atque architecto quo,
        delectus ea quis commodi.
      </p>
    </main>
  );
}

export default Home;
