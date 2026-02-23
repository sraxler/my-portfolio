import React from "react";
import CV2026 from "../documents/Savio_Fernandes_CV_2026.docx.pdf";

export default function Resume() {
    return (
        <div>
            <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                className="resumeTitle ml-32 mt-16 text-4xl"
            >
                Resume
            </h1>
            <a href={CV2026} download>
                <h1
                    data-aos="fade-right"
                    data-aos-duration="2500"
                    className="dl p-2 ml-32 mt-12"
                >
                    Download Resume
                </h1>
            </a>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="resume grid grid-cols-1 md:grid-cols-1 grid-flow-row m-32 mt-10 gap-4"
            >
                <div>
                    <h1
                        data-aos="zoom-out-right"
                        data-aos-duration="2000"
                        className="text-3xl"
                    >
                        Experience
                    </h1>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Software Engineer | LetsGetChecked
                        </p>
                        <p>January 2024 - December 2025 | Dublin, Ireland</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Owned end-to-end delivery for over 10 major projects, including order-kit scanning
automation, fax & letter generation, migrating microservices from a monolith and more.
                            </li>
                            <li className="mt-4 ml-2">
                                - Designed and developed fullstack applications using Angular and ASP.NET web-form
frontends and RESTful APIs with .NET Core, including high and low level design significantly
enhancing user experience by 70% as measured by product managers.
                            </li>
                            <li className="mt-4 ml-2">
                                - Comfortable working in Agile and Kanban methodologies, streamlining project timelines and
accelerating feature delivery from concept to production with 100% ticket completion as per JIRA.
                            </li>
                            <li className="mt-4 ml-2">
                                - Conducted comprehensive unit and integration tests using NUnit, improving software reliability
and performance.
                            </li>
                            <li className="mt-4 ml-2">
                                - Managed and optimized data storage and retrieval across SQL, MongoDB, and AWS
DynamoDB
                            </li>
                            <li className="mt-4 ml-2">
                                - Leveraged AWS, Docker, and Appveyor to build robust cloud-native applications.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Utilized monitoring tools like Grafana, Pagerduty, and Splunk for proactive system health and
performance management.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Software Engineer | Cargo LLC
                        </p>
                        <p>June 2021 - September 2022 | Kuwait City, Kuwait</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Core fullstack developer working in a start-up environment, responsible for over 15 repositories
including Blazor dashboards and .NET APIs handling logistics based APIs, Administrative
dashboards.
                            </li>
                            <li className="mt-4 ml-2">
                                - Implemented CQRS, Event driven, Unit of work design patterns to improve API efficiency and
scalability, supporting complex business logic.
                            </li>
                            <li className="mt-4 ml-2">
                                - Utilized Ocelot for Microservices architecture, optimizing service integration and data flow
across distributed systems.
                            </li>
                            <li className="mt-4 ml-2">
                                - Architected and optimized spatial databases to store and query driver GPS coordinates and
delivery zones, utilizing Mapbox for real-time route optimization and automated geofencing.
                            </li>
                            <li className="mt-4 ml-2">
                                - Expertise working in Agile and SCRUM environment, actively participating in sprint planning,
daily stand-ups, and retrospectives.
                            </li>
                            <li className="mt-4 ml-2">
                                - Designed and updated databases including SQL and MongoDB for robust data persistence.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Mentored and onboarded new developers, providing training on .NET API development best
practices.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Student Program Assistant-IEP | American University
                            of Kuwait (AUK)
                        </p>
                        <p>May 2019 - May 2020</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Conducted and Proctored Accuplacer exams for
                                newly admitted students.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Worked as a peer mentor for freshman
                                university orientation.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Library Tech Support Student Assistant | American
                            University of Kuwait (AUK)
                        </p>
                        <p>February 2018 - May 2019 </p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Maintained computer labs in the library.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Performed troubleshooting when required to
                                solve technical problems.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Student Lab Assistant-IT | American University of
                            Kuwait (AUK)
                        </p>
                        <p>September 2016 - May 2017 </p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Installed hardware components in offices.
                            </li>
                            <li className="mt-4 ml-2">
                                - Performed troubleshooting and fixing.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Worked with IT professionals in Network
                                Administration and Tech Support.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1
                        data-aos="zoom-out-right"
                        data-aos-duration="2000"
                        className="text-3xl"
                    >
                        Education
                    </h1>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            M.Sc. in Software Engineering | Maynooth University, Ireland
                        </p>
                        <p>2022 - 2023 | CGPA: 2.1 (First class honors)</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Master's focused on advanced software development methodologies, software architecture, and
design patterns.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Thesis in UX research, Human Computer Interaction, and Data analysis.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            BE in Computer Engineering | American University of
                            Kuwait (AUK)
                        </p>
                        <p>2016 - 2021 | CGPA: 3.1</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - ABET-certified program with a strong foundation in hardware and software aspects of computer
systems. Assembly, FPGA, Embedded system design, Networks & Signal and Systems.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Focused on programming languages (C, C++, Java, JavaScript), software development,
computer architecture, networks, operating systems, and database management.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Diploma in Project Management | UCD Professional Academy, Ireland
                        </p>
                        <p>November 2025 - March 2026</p>
                        <ul>
                            <li className="mt-4 ml-2 mb-8">
                                - An extensive Project Management diploma focusing on Scope, Cost, Schedule, Resource,
Communication, Risk, Stakeholder and Agile management.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            Diploma in Sales Management | UCD Professional Academy, Ireland
                        </p>
                        <p>February 2026 - May 2026</p>
                        <ul>
                            <li className="mt-4 ml-2 mb-8">
                                - A comprehensive programme that focused on the modern sales ecosystem through data-driven
strategy, buyer psychology, CRM optimization, and the ILAER lifecycle and scalable revenue and
stakeholder value.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            12th Grade CBSE Graduate | Carmel School Kuwait
                        </p>
                        <p>2002 - 2016</p>
                        <ul>
                            <li className="mt-4 ml-2 mb-8">
                                - AISSC Computer Science - Math
                                curriculum.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1
                        data-aos="zoom-out-right"
                        data-aos-duration="2000"
                        className="text-3xl"
                    >
                        Extra Curricular
                    </h1>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            PEER MENTOR | STUDENT ORIENTATION (IEP){" "}
                        </p>
                        <p>January 2020</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Managed new members and performed admin tasks
                                to ensure registration of attendees.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Interacted with new students with social
                                activities.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            ORGANIZER | IEEE 2ND GCC SYP CONGRESS 2019{" "}
                        </p>
                        <p>May 2019</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Managed and Adhered to the organizing
                                committee with a team of organizers.
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Exhibition moderator
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            VOLUNTEER | COMIC CON KUWAIT
                        </p>
                        <p>February 2018</p>
                        <ul>
                            <li className="mt-4 ml-2">
                                - Worked in a team to regulate traffic flow.{" "}
                            </li>
                            <li className="mt-4 ml-2 mb-8">
                                - Adhered to the purpose of satisfying clients
                                attending the event.{" "}
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            VOLUNTEER | AIESEC 2ND NATCO CONFERENCE KUWAIT
                        </p>
                        <p>April 2017</p>
                        <ul>
                            <li className="mt-4 ml-2 mb-8">
                                - Engaged in social activities with multiple
                                candidates.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="zoom-out-right" data-aos-duration="2000">
                        <p className="mt-4 text-xl">
                            RUNNER-UP | CBSE FOOTBALL CLUSTERS KUWAIT{" "}
                        </p>
                        <p>November 2014</p>
                        <ul>
                            <li className="mt-4 ml-2 mb-8">
                                - Participated in CBSE clusters football
                                tournament.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
