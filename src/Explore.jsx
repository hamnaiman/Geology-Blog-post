import React from "react";
import { motion } from "framer-motion";
import './App.css';

const Explore = () => {
  return (
    <div id="explore-section" className="article-section">
      <motion.h1
        className="article-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌍 All About Geology
      </motion.h1>

      <div className="article-content">
        {/* What is Geology */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
          <div className="explore-card">
            <img src="https://images.squarespace-cdn.com/content/v1/590c1ec9b3db2bbf12f34726/1617875472943-T8DQ4GK6XY5HCFF11E34/Main+Thumbnail+.jpg" alt="What is Geology" className="explore-img" />
            <div className="explore-text">
              <h2>What is Geology?</h2>
              <p>Geology is the scientific study of the Earth — its structure, materials, processes, history, and the forces that have shaped it over time. It includes the study of rocks, minerals, fossils, earthquakes, volcanoes, and more.</p>
            </div>
          </div>
        </motion.section>

        {/* Major Branches */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Major Branches of Geology</h2>

          <h3>Minerology</h3>
          <div className="explore-card">
            <img src="https://media.tenor.com/HgEqjjQWmj8AAAAM/rock-rock-formation.gif" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Focuses on the chemical composition, crystal structure, and physical properties of minerals.</p>
            </div>
          </div>
          <h3>Petrology</h3>
          <div className="explore-card">
            <img src="https://i.makeagif.com/media/12-17-2018/BTZQKh.gif" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Study of rocks: igneous, sedimentary, and metamorphic.</p>
            </div>
          </div>
          <h3>Paleontology</h3>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70xoLzNMyYS5GoKcaIXVWdctGHW91OYRh9w2H6nLxsIQ-NWSjLDKZZd9zktls6hEcWrY&usqp=CAU" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Study of fossils and ancient life forms.</p>
            </div>
          </div>
          <h3>Stratigraphy</h3>
          <div className="explore-card">
            <img src="https://media4.giphy.com/media/gtZjEJuhbRHKeAdtlU/giphy.gif?cid=6c09b952ohjc0ocro3r7bo2hs2ccthnroasc8zdn9hcdbvf5&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Deals with layered rock formations and geological time</p>
            </div>
          </div>


          <h3>Structural Geology</h3>
          <div className="explore-card">
            <img src="https://cdn.britannica.com/45/345-050-226C3D01/Types-earthquakes-faulting-rock-masses-each-other.jpg" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Analyzes Earth's structural features like faults and folds to understand crustal deformation.</p>
            </div>
          </div>

          <h3>Sedimentology</h3>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYu1rkq1C4CQe8icbPKvj9r0g5_CvzqqwBw&s" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Studies sediment transportation, deposition, and formation.</p>
            </div>
          </div>
          <h3>Hydrogeology</h3>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS-P-y-b5UkGWWSMrTObgJbp9nOATlZ5f2w&s" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Studies groundwater flow and distribution.</p>
            </div>
          </div>
          <h3>Geophysics</h3>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsYD_hHS1mOqN1LnsLDrisNT8UXptAhxJCA&s" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Applies physics to study Earth's interior (e.g., gravity, magnetism, seismic waves).</p>
            </div>
          </div>
          <h3>Geochemistry</h3>
          <div className="explore-card">
            <img src="https://earthsciences.typepad.com/.a/6a0133f32df47b970b0147e3d03968970b-pi" alt="Structural Geology" className="explore-img" />
            <div className="explore-text">
              <p>Examines chemical composition and reactions in geological systems</p>
            </div>
          </div>

          <h3>Volcanology & Seismology</h3>
          <div className="explore-card">
            <img src="https://i.pinimg.com/originals/18/4f/6b/184f6b0e935eeb465053f58ed1b291da.gif" alt="Volcano" className="explore-img" />
            <div className="explore-text">
              <p>Volcanology: Study of volcanoes and lava. Seismology: Study of earthquakes and seismic waves.</p>
            </div>
          </div>
        </motion.section>

        {/* Why Geology is Important */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Why is Geology Important?</h2>
          <ul>
            <li><strong>Resource Exploration:</strong> Oil, gas, minerals, water.</li>
            <li><strong>Environmental Protection:</strong> Assessing pollution, hazards.</li>
            <li><strong>Natural Disaster Prediction:</strong> Earthquakes, landslides.</li>
            <li><strong>Understanding Earth's History:</strong> Evolution and time.</li>
            <li><strong>Construction & Engineering:</strong> Land stability evaluation.</li>
          </ul>
        </motion.section>

        {/* Types of Rocks */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3OMlXWY0ntB8WTwWWsKlVAzd_SOLVhviJJvJeYvsP_3J3Zg9q0-YSD9RUMBvwe6Acmc&usqp=CAU" alt="Types of Rocks" className="explore-img" />
            <div className="explore-text">
              <h2>Types of Rocks</h2>
              <p><strong>Igneous:</strong> Formed from magma/lava. (Granite, Basalt)</p>
              <p><strong>Sedimentary:</strong> From compressed sediments. (Limestone, Sandstone)</p>
              <p><strong>Metamorphic:</strong> Changed by heat/pressure. (Marble, Gneiss)</p>
            </div>
          </div>
        </motion.section>

        {/* Plate Tectonics */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="explore-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYTkPuHjfIkO8ABiDlhMgMGD7Zl-op0sXLQ&s" alt="Plate Tectonics" className="explore-img" />
            <div className="explore-text">
              <h2>Plate Tectonics</h2>
              <p>The theory that explains movements of Earth's lithospheric plates, responsible for earthquakes, volcanic activity, and mountain formation.</p>
            </div>
          </div>
        </motion.section>

        {/* Geological Time Scale */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="explore-card">
            <img src="https://media.sciencephoto.com/image/f0326288/800wm" alt=""  className="explore-img"/>
          <h2>Geological Time Scale</h2>
          <p>Earth’s 4.6-billion-year history divided into eons, eras, periods, and epochs, marked by evolution and mass extinctions.</p>
          </div>
        </motion.section>

        {/* Fossils and Evolution */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Fossils and Evolution</h2>
          <p>Fossils reveal Earth's biological history and help understand evolution and past climates.</p>
        </motion.section>

        {/* Tools and Techniques */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Tools and Techniques in Geology</h2>
          <ul>
            <li>Fieldwork: Mapping, sampling</li>
            <li>Lab: Microscopy, dating methods</li>
            <li>Remote Sensing: Satellite images</li>
            <li>Geophysics: Seismic, magnetic, etc.</li>
            <li>GIS: Spatial data analysis</li>
          </ul>
        </motion.section>

        {/* Careers */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Careers in Geology</h2>
          <ul>
            <li>Petroleum Geologist</li>
            <li>Environmental Consultant</li>
            <li>Hydrogeologist</li>
            <li>Seismologist</li>
            <li>Paleontologist</li>
            <li>Academic/Researcher</li>
          </ul>
        </motion.section>

        {/* Fun Facts */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Fun Geological Facts</h2>
          <ul>
            <li>Earth’s core is hotter than the Sun’s surface (~5,700°C).</li>
            <li>Grand Canyon reveals 2 billion years of history.</li>
            <li>Diamonds form deep within Earth under extreme conditions.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default Explore;
