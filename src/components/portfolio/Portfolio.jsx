import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Portfolio = () => {
	const [items] = useState(Menu);

	return (
		<section className="portfolio container section" id="projects">
			<h2 className="section__title">Projects</h2>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt={title} className="portfolio__img" />
								<div className="portfolio__mask">
									<h3 className="portfolio__title">{title}</h3>
									<a
										href={repositoryUrl}
										target="_blank"
										rel="noreferrer"
										className="portfolio__github-button"
									>
										<RiGithubLine className="portfolio__button-icon" />
									</a>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
