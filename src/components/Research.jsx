import React from 'react'

const Research = () => {
  return (
    <div>
            <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                className="projectTitle ml-32 mt-16 text-4xl"
            >
                Research projects
            </h1>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="resume grid grid-cols-1 md:grid-cols-1 grid-flow-row m-32 mt-10 gap-4"
            >
                <div>
                    <h1 className="text-2xl">
                        MSc Research project: Data Analysis and Visualization of Digital Humanities Prosopographical Database
                    </h1>
                    <p className="mt-4">
                        - Developed an interactive web application using React, deck.gl, and Mapbox to analyze
geospatial population data in Ireland.
                    </p>
                    <p className="mt-4">
                        - Conducted extensive UX research and data analysis to inform iterative model design
and user interface development.
                    </p>
                    <p className="mt-4 mb-8">
                        - Applied advanced software architecture and design patterns to ensure robust data
persistence and visualization.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl">
                        Retail GIS Research Project | Lead Researcher
                    </h1>
                    <p className="mt-4">
                        - Conducted a Geospatial Information Systems (GIS) study to identify and analyze
optimal locations for retail shops.
                    </p>
                    <p className="mt-4">
                        - Leveraged PostGIS, QGIS, PGAdmin, Kaggle to build predictive models explaining the
'why' behind regional location trends, successfully bridging the gap between raw spatial
data and actionable business intelligence.
                    </p>
                    <p className="mt-4 mb-8">
                        - Visualized spatial patterns and provided data-driven insights on regional economic
drivers using geospatial libraries.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl">Operating a pneumatic system using PV Panels | B.Eng. Thesis Project</h1>
                    <p className="mt-4">
                        - Conducted a research on pneumatic systems and control systems deriving calculations
for energy efficient research using PV panels to utilize renewable energy.
                    </p>
                    <p className="mt-4">
                        - Developed control logic using Arduino microcontrollers to implement the energy efficient
pneumatic system.
                    </p>
                    <p className="mt-4 mb-8">
                        - Wrote and IEEE paper under the supervision of our capstone supervisor Dr. Detlef
Hummes, coordinating with a team of researchers.
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Research