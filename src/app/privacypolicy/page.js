"use client"

import React from 'react';
import { Container, Typography, Link, Box, List, ListItem, alpha } from '@mui/material';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
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
                        <Typography component="h2" variant="h4" color="primary">Privacy Policy</Typography>
                        <Typography variant="body1" color="text.secondary">Last updated May 22, 2024</Typography>

                        <Box mt={5}>
                            <Typography variant="body1" paragraph>
                                This privacy notice for <strong>Portfolio Soumya Prakash Nayak</strong> ("<strong>i</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>Services</strong>"), such as when you:
                            </Typography>

                            <List>
                                <ListItem>
                                    <Typography variant="body1">
                                        Visit our website at <Link href="https://portfolio-azure-rho-99.vercel.app" target="_blank">https://portfolio-azure-rho-99.vercel.app</Link>, or any website of ours that links to this privacy notice.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body1">
                                        Engage with us in other related ways, including any sales, marketing, or events.
                                    </Typography>
                                </ListItem>
                            </List>

                            <Typography variant="body1" paragraph>
                                <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact me at <Link href="mailto:protfoliosoumya@gmail.com">protfoliosoumya@gmail.com</Link>.
                            </Typography>
                        </Box>
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
                    <Typography variant="h5" component="h2" gutterBottom>
                        Summary of Key Points
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our</em></strong> <Link href="#toc">table of contents</Link> <strong><em>below to find the section you are looking for.</em></strong>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <Link href="#personalinfo">personal information you disclose to us</Link>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <Link href="#infouse">how we process your information</Link>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <Link href="#whoshare">when and with whom we share your personal information</Link>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <Link href="#infosafe">how we keep your information safe</Link>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <Link href="#privacyrights">your privacy rights</Link>.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <Link href="https://app.termly.io/notify/ae267e2d-4f37-4250-ac82-91c5e0eea0d8" target="_blank">submitting a data subject access request</Link>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Want to learn more about what we do with any information we collect? <Link href="#toc">Review the privacy notice in full</Link>.
                    </Typography>

                    <Box id="toc" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Table of Contents
                        </Typography>
                        <List>
                            <ListItem>
                                <Link href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#infosafe">4. HOW DO WE KEEP YOUR INFORMATION SAFE?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#privacyrights">5. WHAT ARE YOUR PRIVACY RIGHTS?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#DNT">6. CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#caresidents">7. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#policyupdates">8. DO WE MAKE UPDATES TO THIS NOTICE?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#contact">9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#request">10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link>
                            </ListItem>
                        </List>
                    </Box>

                    <Box id="infocollect" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            1. WHAT INFORMATION DO WE COLLECT?
                        </Typography>

                        <Typography variant="h6" component="h3" gutterBottom>
                            Personal information you disclose to us
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> We collect personal information that you provide to us.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                        </Typography>

                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    <strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; contact or authentication data; billing addresses; and other similar information.
                                </Typography>
                            </ListItem>
                        </List>

                        <Typography variant="body1" paragraph>
                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                        </Typography>
                    </Box>

                    <Box id="infouse" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            2. HOW DO WE PROCESS YOUR INFORMATION?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                        </Typography>

                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    <strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>

                    <Box id="whoshare" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We may need to share your personal information in the following situations:
                        </Typography>

                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>

                    <Box id="infosafe" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            4. HOW DO WE KEEP YOUR INFORMATION SAFE?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                        </Typography>
                    </Box>

                    <Box id="privacyrights" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            5. WHAT ARE YOUR PRIVACY RIGHTS?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We will consider and act upon any request in accordance with applicable data protection laws.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <Link href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</Link>.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            If you are located in Switzerland, the contact details for the data protection authorities are available here: <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</Link>.
                        </Typography>
                    </Box>

                    <Box id="DNT" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            6. CONTROLS FOR DO-NOT-TRACK FEATURES
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                        </Typography>
                    </Box>

                    <Box id="caresidents" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            7. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                        </Typography>
                    </Box>

                    <Box id="policyupdates" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            8. DO WE MAKE UPDATES TO THIS NOTICE?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                        </Typography>
                    </Box>

                    <Box id="contact" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            If you have questions or comments about this notice, you may email me at <Link href="mailto:protfoliosoumya@gmail.com">protfoliosoumya@gmail.com</Link> or by post to:
                        </Typography>

                        <Typography variant="body1" paragraph>
                            <strong>Soumya Prakash Nayak</strong><br />
                            <strong>Matia, Jagulaipara</strong><br />
                            <strong>Rajkanika</strong><br />
                            <strong>Kendrapara, Odisha 754220</strong><br />
                            <strong>India</strong>
                        </Typography>
                    </Box>

                    <Box id="request" my={4}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit: <Link href="https://app.termly.io/notify/ae267e2d-4f37-4250-ac82-91c5e0eea0d8" target="_blank">https://app.termly.io/notify/ae267e2d-4f37-4250-ac82-91c5e0eea0d8</Link>. We will respond to your request within 30 days.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Layout >
    )
};

export default PrivacyPolicy;