import React from 'react';
import { ChevronRightRounded } from '@mui/icons-material';
import { Grid, alpha, Box, Container, Stack, Typography, IconButton, Card, Chip, Link } from '@mui/material';

const Resume = ({ personalInfo, summary, experience, education, skills, projects, languages, interests }) => {
    return (
        <>
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
                    <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: 'center' }}>
                        <Typography component="h2" variant="h4" color="primary">{personalInfo.name}</Typography>
                        <Typography variant="body1" color="text.secondary">{summary}</Typography>

                        <Box mt={5}>
                            <Typography fontSize={20} color="text.primary">Connect With Me</Typography>
                            <Stack direction="row" justifyContent="center" spacing={1} useFlexGap sx={{ color: 'text.secondary' }}>
                                {
                                    personalInfo.socialMedia.map((item, index) => (
                                        <IconButton
                                            key={index}
                                            color="inherit"
                                            href={item.link}
                                            target="_blank"
                                            aria-label={item.name}
                                            sx={{ alignSelf: 'center' }}
                                        >
                                            {item.icon}
                                        </IconButton>
                                    ))
                                }
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container
                sx={{
                    bgcolor: 'background.default',
                    pt: { xs: 2, sm: 4 },
                    pb: { xs: 2, sm: 4 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Grid container spacing={2}>
                    {/* Experience and Languages Section */}
                    <Grid item xs={12} md={6}>
                        {/* Experience Section */}
                        <Container
                            sx={{
                                pt: { xs: 3, sm: 5 },
                                pb: { xs: 1, sm: 2 },
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: { xs: 3, sm: 4 },
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                                <Typography component="h2" variant="h4" color="text.primary">
                                    Work Experience
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    A summary of my professional work history, showcasing key responsibilities.
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                {experience.map((item, index) => (
                                    <Grid item xs={12} key={index} >
                                        <Box component={Card} variant="outlined" boxShadow={2}>
                                            <Box sx={{ px: 2, py: 2 }}>
                                                <Typography color="primary" fontSize={13} fontWeight={600} sx={{ opacity: "80%" }}>
                                                    {item.period}
                                                </Typography>
                                                <Typography fontSize={17} fontWeight={600}>
                                                    {item.position}
                                                </Typography>
                                                <Typography color="text.secondary" fontSize={17} fontWeight={600}>
                                                    {item.company}
                                                </Typography>
                                                <Typography color="text.secondary">
                                                    {item.location.city}, {item.location.state}, {item.location.zip}, {item.location.country}
                                                </Typography>

                                                <Box sx={{ mt: 3 }}>
                                                    <Typography fontSize={15} fontWeight={600} color="text.secondary">
                                                        Responsibilities/Tasks
                                                    </Typography>
                                                    <Typography color="text.secondary">
                                                        {item.responsibilities.map((responsibility, index) => (
                                                            <li key={index}>{responsibility}</li>
                                                        ))}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>

                        {/* Languages Section */}
                        <Container
                            sx={{
                                pt: { xs: 3, sm: 5 },
                                pb: { xs: 1, sm: 2 },
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: { xs: 3, sm: 4 },
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                                <Typography component="h2" variant="h4" color="text.primary">Languages</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    A list of spoken languages I am proficient in, with proficiency levels for each.
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                {languages.map((item, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box key={index} component={Card} variant="outlined" boxShadow={2}>
                                            <Box p={2}>
                                                <Typography color="text.primary" variant="body2" fontWeight="bold">
                                                    {item.name}
                                                </Typography>
                                                <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                                                    {item.proficiency}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Grid>

                    {/* Skills, Education & Certifications and Interests Section */}
                    <Grid item xs={12} md={6}>
                        {/* Skills Section */}
                        <Container
                            sx={{
                                pt: { xs: 3, sm: 5 },
                                pb: { xs: 1, sm: 2 },
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: { xs: 3, sm: 4 },
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                                <Typography component="h2" variant="h4" color="text.primary">Skills</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    A list of technical skills i possess.
                                </Typography>
                            </Box>

                            <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: 1 }}>
                                {skills.map((item, index) => <Chip key={index} label={item.name} variant="outlined" />)}
                            </Stack>
                        </Container>

                        {/* Education & Certifications Section */}
                        <Container
                            sx={{
                                pt: { xs: 3, sm: 5 },
                                pb: { xs: 1, sm: 2 },
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: { xs: 3, sm: 4 },
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                                <Typography component="h2" variant="h4" color="text.primary">
                                    Education & Certifications
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Details of my academic background and any certifications or professional training that enhance my qualifications.
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                {education.map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Box component={Card} variant="outlined" boxShadow={2}>
                                            <Box sx={{ px: 2, py: 2 }}>
                                                <Typography color="primary" fontSize={13} fontWeight={600} sx={{ opacity: "80%" }}>
                                                    {item.period}
                                                </Typography>
                                                <Typography fontSize={17} fontWeight={600}>
                                                    {item.degree} {item.fieldOfStudy ? ` in ${item.fieldOfStudy}` : ""}
                                                </Typography>
                                                <Typography color="text.secondary" fontSize={17} fontWeight={600}>
                                                    {item.institution}
                                                </Typography>
                                                <Typography color="text.secondary">
                                                    {item.location.city}, {item.location.state}, {item.location.zip}, {item.location.country}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>

                        {/* Interests Section */}
                        <Container
                            sx={{
                                pt: { xs: 3, sm: 5 },
                                pb: { xs: 1, sm: 2 },
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: { xs: 3, sm: 4 },
                            }}
                        >
                            <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                                <Typography component="h2" variant="h4" color="text.primary">My Interests</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Personal interests and hobbies that highlight my personality and can connect to my professional life.
                                </Typography>
                            </Box>

                            <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: { xs: 1, sm: 2 }, }}>
                                {interests.map((item, index) => <Chip key={index} label={item} variant="outlined" />)}
                            </Stack>
                        </Container>
                    </Grid>
                </Grid>

                {/* Projects Section */}
                <Container
                    sx={{
                        pt: { xs: 3, sm: 5 },
                        pb: { xs: 1, sm: 2 },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 4 },
                    }}
                >
                    <Box sx={{ width: '100%', textAlign: 'left', px: 1 }}>
                        <Typography component="h2" variant="h4" color="text.primary">
                            My Projects
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Descriptions of significant projects I have worked on, highlighting objectives, my role, and technologies used.
                        </Typography>
                    </Box>

                    <Grid container spacing={2}>
                        {projects.map((item, index) => (
                            <Grid item xs={12} key={index} >
                                <Box component={Card} variant="outlined" boxShadow={2}>
                                    <Box sx={{ px: 2, py: 2 }}>
                                        <Typography color="primary" fontSize={13} fontWeight={600} sx={{ opacity: "80%" }}>
                                            {item.category}
                                        </Typography>
                                        <Typography color="text.primary" fontSize={17} fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ my: 0.5 }}>
                                            {item.description}
                                        </Typography>

                                        <Box
                                            color="text.secondary"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="start"
                                            my={1}
                                        >
                                            <Typography fontSize={15} fontWeight={600} color="text.secondary">
                                                Role:
                                            </Typography>
                                            <Typography color="text.secondary" ml={1}>
                                                {item.role}
                                            </Typography>
                                        </Box>

                                        <Box my={2}>
                                            <Typography fontSize={15} fontWeight={600} color="text.secondary" mb={1}>
                                                Technologies
                                            </Typography>
                                            <Stack
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    flexWrap: "wrap",
                                                    gap: 1,
                                                }}>
                                                {item.technologies.map((item, index) =>
                                                    <Chip key={index} label={item} variant="outlined" size="small" />)}
                                            </Stack>
                                        </Box>

                                        {item.link && <Link
                                            component="a"
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            href={item.link}
                                            target="_blank"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            }}
                                        >
                                            <span>Visit site</span>
                                            <ChevronRightRounded
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Link>}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    );
};

export default Resume;