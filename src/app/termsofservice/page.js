"use client"

import React from 'react';
import { alpha, Container, Typography, Box, Link, List, ListItem } from '@mui/material';
import Layout from '@/components/Layout';

const TermsOfService = () => {
    return (
        <Layout>
            <Box
                sx={(theme) => ({
                    width: '100%',
                    backgroundImage:
                        theme.palette.mode === 'light'
                            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                    backgroundSize: '100% 20%',
                    backgroundRepeat: 'no-repeat',
                })}
            >
                <Container
                    sx={{
                        pt: { xs: 14, sm: 20 },
                        pb: { xs: 8, sm: 12 },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 6 },
                    }}
                >
                    <Box sx={{ width: { sm: '100%', md: '80%' }, textAlign: 'center' }}>
                        <Typography component="h2" variant="h4" color="primary">Terms of Service</Typography>
                        <Typography variant="body1" color="text.secondary">Last updated May 22, 2024</Typography>

                        <List sx={{ mt: 5 }}>
                            <ListItem>
                                <Typography variant="body1">
                                    We are Portfolio Soumya Prakash Nayak (&quot;i,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) , a company registered in India at Matia, Jagulaipara , Rajkanika , Kendrapara , ODISHA 754220 .
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    We operate the website <Link href="https://portfolio-azure-rho-99.vercel.app" target="_blank">https://portfolio-azure-rho-99.vercel.app</Link>(the &quot;Site&quot;) , as well as any other related products and services that refer or link to these legal terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    You can contact us by phone at <Link href="tel:8908930619">8908930619</Link>, email at <Link href="mailto:protfoliosoumya@gmail.com">protfoliosoumya@gmail.com</Link> , or by mail to Matia, Jagulaipara , Rajkanika , Kendrapara , ODISHA 754220 ,  India .
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </Box>

            <Container
                sx={{
                    bgcolor: 'background.default',
                    py: { xs: 2, sm: 4 },
                    px: { xs: 2, sm: 10 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box my={4}>
                    <Typography variant="body1" gutterBottom>
                        <strong>1. AGREEMENT TO TERMS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Portfolio Soumya Prakash Nayak (&quot;i,&quot; &quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the <Link href="https://portfolio-azure-rho-99.vercel.app" target="_blank">https://portfolio-azure-rho-99.vercel.app</Link> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>3. USER REPRESENTATIONS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>4. PROHIBITED ACTIVITIES</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>5. USER GENERATED CONTRIBUTIONS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                    </Typography>
                    <Typography variant="body2" component="ul" paragraph>
                        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                        <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Service.</li>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>6. CONTRIBUTION LICENSE</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>7. GUIDELINES FOR REVIEWS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>8. SOCIAL MEDIA</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>9. SUBMISSIONS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>10. SITE MANAGEMENT</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>11. PRIVACY POLICY</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Service. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children&apos;s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>12. TERM AND TERMINATION</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>13. MODIFICATIONS AND INTERRUPTIONS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>14. GOVERNING LAW</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        These Terms shall be governed by and defined following the laws of the United States. Portfolio Soumya Prakash Nayak and yourself irrevocably consent that the courts of Odisha shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>15. DISPUTE RESOLUTION</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <strong>Informal Negotiations</strong>
                        <br />
                        To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Service (each &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Binding Arbitration</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the AAA website www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in India, Odisha. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Restrictions</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Exceptions to Informal Negotiations and Arbitration</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>16. CORRECTIONS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>17. DISCLAIMER</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&apos;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>18. LIMITATIONS OF LIABILITY</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>19. INDEMNIFICATION</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>20. USER DATA</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>22. CALIFORNIA USERS AND RESIDENTS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>23. MISCELLANEOUS</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        These Terms of Service and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Terms of Service or use of the Site. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>24. CONTACT US</strong>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Soumya Prakash Nayak
                        <br />
                        Matia, Jagulaipara , Rajkanika
                        <br />
                        Kendrapara, ODISHA 754220
                        <br />
                        India
                        <br />
                        Email: <Link href="mailto:protfoliosoumya@gmail.com">protfoliosoumya@gmail.com</Link>
                        <br />
                        Phone: <Link href="tel:8908930619">8908930619</Link>
                    </Typography>
                </Box>
            </Container>
        </Layout >
    );
};

export default TermsOfService;