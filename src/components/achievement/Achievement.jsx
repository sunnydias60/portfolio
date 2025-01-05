import React from 'react'
import './achievement.css'
import CustomButton from '../button/CustomButton'
import JOURNAL from '../../assets/journal.pdf'
import APPRECIATION from '../../assets/appreciation.pdf'
import GCP from '../../assets/gcp.png'
import { Card } from '../card/Card'
import AZ900 from '../../assets/az-900.png'
import AZ104 from '../../assets/az-104.png'


export const Achievement = () => {
    return (
        <section id='achievement'>
            <h5>Here are my</h5>
            <h2>Achievements</h2>

            <div className="container achievement__container">
                <div className="achievement__pulication">
                    <h3>Publication</h3>
                    <article className="pulication__item">
                        <p>Nilesh M. Patil, <b>Sunny P. Dias</b>, Ashley A. Dcunha, Rohit J. Dodti. (2020).
                            HYBRID PHISHING SITE DETECTION. <i>International Journal of Advanced
                                Science and Technology</i>, 29(6s), 2452-2459.
                        </p>
                        <div className="pulication__item-cta">
                            <CustomButton type="one" text="Journal" link="http://sersc.org/journals/index.php/IJAST/article/view/11911" />
                            <CustomButton type="two" text="View" link={JOURNAL} />
                        </div>
                    </article>
                </div>

                <div className="achievement__certification">
                    <h3>Certifications</h3>
                    <div className='certification__content'>
                        <Card type="four" heading="AZ-900" image={AZ900} button_text="Verify" link="https://www.credly.com/badges/a6086fab-81eb-4d5c-9ee2-ff02cbdc3f23" />
                        <Card type="four" heading="AZ-104" image={AZ104} button_text="Verify" link="https://www.credly.com/badges/3fc05b6f-de3d-46c1-b017-1cd73b69e2c0" />
                    </div>
                </div>

                <div className="achievement__appreciation">
                    <h3>Appreciation</h3>
                    <article className="appreciation__item">
                        <p>RC Diamonds' Outstanding Performer at Web Development Internship Programme </p>
                        <div className="appreciation__item-cta">
                            <CustomButton type="two" text="View" link={APPRECIATION} />
                        </div>
                    </article>
                </div>

                <div className="achievement__other">
                    <h3>Other Achievements</h3>
                    <div className='other__content'>
                        <Card type="four" heading="Google Cloud Platform Cloud Skills Boost" image={GCP} button_text="View Badges" link="https://partner.cloudskillsboost.google/public_profiles/e5b5f166-d152-41b9-a125-5ea8b6e9ea33" />
                    </div>
                </div>
            </div>
        </section>
    )
}
