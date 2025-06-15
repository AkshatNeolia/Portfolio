import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
import Resume from '../../assets/Akshat_Neolia Resume.pdf';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I'm Akshat Neolia an aspiring Data Scientist based in Ghaziabad, Uttar Pradesh.
                            I'm currently in my final year at SRM Institute of Science and Technology, pursuing a B.Tech in Computer Science and Engineering with a specialization in Information Technology.
                            Over the past few years, I've developed a strong interest in building intelligent systems that solve real-world problems.
                            I'm constantly working on improving my technical skills by building hands-on projects, contributing to open source, and completing certifications in areas like deep learning and data analytics.
                            Outside of coding, I enjoy collaborating with peers, sharing knowledge, and staying updated with the latest advancements in AI. <br /><br />
                        </p>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default About