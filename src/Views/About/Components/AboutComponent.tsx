import React from "react";

const AboutComponent = () => {
  return (
    <div className="w-full h-5/6 flex flex-col items-center pt-4 pb-8 overflow-y-scroll">
      <div className="flex flex-col "></div>
      {/* Mision */}
      <div className="flex w-11/12 h-auto px-4">
        <div className="flex flex-col justify-evenly w-2/3">
          <p className="text-4xl font-bold text-center text-white">Misión</p>
          <p className="text-white text-justify px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            odit praesentium nobis vel eveniet iusto labore ullam, unde
            doloribus, natus aut laudantium a placeat? Facilis eius cupiditate
            corrupti animi! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Accusantium aspernatur ex est quibusdam libero voluptates eum
            nemo incidunt commodi, soluta illum odit dignissimos omnis quisquam
            cumque maiores ullam corrupti possimus? Suscipit atque voluptate
            maiores cum necessitatibus unde placeat explicabo deleniti,
            recusandae minima commodi! Officia beatae soluta incidunt alias
            quos, consectetur officiis labore, magnam fugit illum fuga nulla
            accusantium nostrum repellat? Consequuntur rem odit temporibus,
            magni eligendi mollitia dolore doloremque quis repudiandae magnam
            accusamus voluptas officia ipsum placeat incidunt ullam amet odio
            earum facere ratione est! Deserunt quae quaerat assumenda molestiae.
            Ratione amet assumenda et voluptatibus odio ullam non quasi, quam
            eius libero, voluptate rerum quisquam dicta maiores nihil
            consectetur aut quidem perspiciatis voluptates. Reiciendis, dolorem
            ex aspernatur maxime quia error?
          </p>
        </div>
        <div className="w-1/3">
          <img src="/Assets/Images/mision.png" alt="" />
        </div>
      </div>
      <br />
      {/* Vision */}
      <div className="flex w-11/12 h-auto px-4">
        <div className="w-1/3">
          <img src="/Assets/Images/vision.png" alt="" />
        </div>
        <div className="flex flex-col justify-evenly w-2/3">
          <p className="text-4xl font-bold text-center text-white">Misión</p>
          <p className="text-white px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            odit praesentium nobis vel eveniet iusto labore ullam, unde
            doloribus, natus aut laudantium a placeat? Facilis eius cupiditate
            corrupti animi! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Accusantium aspernatur ex est quibusdam libero voluptates eum
            nemo incidunt commodi, soluta illum odit dignissimos omnis quisquam
            cumque maiores ullam corrupti possimus? Suscipit atque voluptate
            maiores cum necessitatibus unde placeat explicabo deleniti,
            recusandae minima commodi! Officia beatae soluta incidunt alias
            quos, consectetur officiis labore, magnam fugit illum fuga nulla
            accusantium nostrum repellat? Consequuntur rem odit temporibus,
            magni eligendi mollitia dolore doloremque quis repudiandae magnam
            accusamus voluptas officia ipsum placeat incidunt ullam amet odio
            earum facere ratione est! Deserunt quae quaerat assumenda molestiae.
            Ratione amet assumenda et voluptatibus odio ullam non quasi, quam
            eius libero, voluptate rerum quisquam dicta maiores nihil
            consectetur aut quidem perspiciatis voluptates. Reiciendis, dolorem
            ex aspernatur maxime quia error?
          </p>
        </div>
      </div>
      <br />
      {/* Historia */}
      <div className="flex flex-col  w-11/12 h-auto px-4">
        <p className="text-4xl font-bold text-center text-white">
          Nuestra Historia
        </p>
        <div className="flex items-center w-full">
          <p className="w-2/3 text-white px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
            odit praesentium nobis vel eveniet iusto labore ullam, unde
            doloribus, natus aut laudantium a placeat? Facilis eius cupiditate
            corrupti animi! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Accusantium aspernatur ex est quibusdam libero voluptates eum
            nemo incidunt commodi, soluta illum odit dignissimos omnis quisquam
            cumque maiores ullam corrupti possimus? Suscipit atque voluptate
            maiores cum necessitatibus unde placeat explicabo deleniti,
            recusandae minima commodi! Officia beatae soluta incidunt alias
            quos, consectetur officiis labore, magnam fugit illum fuga nulla
            accusantium nostrum repellat? Consequuntur rem odit temporibus,
            magni eligendi mollitia dolore doloremque quis repudiandae magnam
            accusamus voluptas officia ipsum placeat incidunt ullam amet odio
            earum facere ratione est! Deserunt quae quaerat assumenda molestiae.
            Ratione amet assumenda et voluptatibus odio ullam non quasi, quam
            eius libero, voluptate rerum quisquam dicta maiores nihil
            consectetur aut quidem perspiciatis voluptates. Reiciendis, dolorem
            ex aspernatur maxime quia error?
          </p>
          <div className="w-1/3">
            <img src="/Assets/Images/history.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
