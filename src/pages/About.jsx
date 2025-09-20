import { useMemo, useState } from "react";

// MUI components
import {
    Avatar,
    Box,
    Chip,
    CircularProgress,
    Container,
    Divider,
    Fade,
    Grid,
    Link,
    Paper,
    Stack,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";

// MUI icons
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import MicIcon from "@mui/icons-material/Mic";
import BuildIcon from "@mui/icons-material/Build";
import CardList from "../components/CardList";

const BOOK_SUBJECTS = ["technology", "science", "biography", "history"];

export default function About() {
    const [subject, setSubject] = useState(BOOK_SUBJECTS[0]);
    const [loadingBooks, setLoadingBooks] = useState(false);
    const prettySubject = useMemo(() => subject.charAt(0).toUpperCase() + subject.slice(1), [subject]);
    const [leadTab, setLeadTab] = useState(0);
    const leadership = useMemo(
        () => [
            {
                key: "msc",
                short: "BulSU MSC",
                org: "BulSU Microsoft Student Community",
                roles: [
                    { role: "Founding Student Adviser", years: "2024–2025" },
                    { role: "Director for Public Relations", years: "2023–2024" },
                ],
            },
            {
                key: "swits",
                short: "SWITS",
                org: "SWITS (Society for the Welfare of IT Students)",
                roles: [
                    { role: "Head of PR & Multimedia", years: "2024–2025" },
                    { role: "Director for Social Media", years: "2021–2024" },
                ],
            },
            {
                key: "ceis",
                short: "CEIS Malolos",
                org: "Centro Escolar Integrated School, Malolos",
                roles: [{ role: "STEM Track Representative", years: "2020–2021" }],
            },
        ],
        []
    );
    const projects = useMemo(
        () => [
            { title: "Jeo: Always At Your Service!", award: "Best Product", event: "AppCon 2024 (June 2025)" },
            {
                title: "KIRA: Kinetic Immersive Reality Assistant",
                award: "Academe’s Choice",
                event: "International Research Conference on IT Education 2025 IT Marketing Challenge (May 2025)",
            },
            {
                title: "SynDICA: Document Tracking System (BJMP)",
                award: "Best Capstone & Research",
                event: "BulSU-CICT 13th In-House of Student Research (May 2025)",
            },
            {
                title: "Agira: Empowering Farmers",
                award: "Champion",
                event: "Regional Assembly on IT Education 2024 iThink Hackathon Programming Challenge (Nov 2024)",
            },
            { title: "ShareRaft", award: "1st Runner Up", event: "1st CICT-USB Ideathon Challenge (Apr 2024)" },
            { title: "Project Quedia", award: "Champion", event: "CICT Days: Website UI Designing (June 2023)" },
        ],
        []
    );

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            {/* Hero */}
            <Fade in timeout={500}>
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Avatar
                        src="/src/assets/axl_image.jpg"
                        alt="Axl Louis P. Coronel"
                        sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                    />
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        Axl Louis P. Coronel
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 1, color: "text.secondary" }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <PlaceIcon fontSize="small" />
                            <Link
                                href="https://maps.google.com/?q=Hagonoy,+Bulacan"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="inherit"
                                variant="body2"
                            >
                                Hagonoy, Bulacan
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2">0999 879 4949</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <EmailIcon fontSize="small" />
                            <Link href="mailto:axllouis.coronel@gmail.com" underline="hover" color="inherit" variant="body2">
                                axllouis.coronel@gmail.com
                            </Link>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <LinkedInIcon fontSize="small" />
                            <Link
                                href="https://www.linkedin.com/in/axllouis-coronel"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="inherit"
                                variant="body2"
                            >
                                linkedin.com/in/axllouis-coronel
                            </Link>
                        </Stack>
                    </Stack>
                    <Typography variant="body1" sx={{ mt: 2 }} color="text.secondary">
                        Developer • Educator • Builder — an innovator with the alias of{" "}
                        <Link href="https://github.com/elfinix" target="_blank">
                            @elfinix
                        </Link>
                    </Typography>
                </Box>
            </Fade>

            {/* Highlight Cards */}
            <Fade in timeout={700}>
                <Grid container spacing={2} alignItems="stretch" sx={{ mb: 5 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2, height: "100%" }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <EmojiEventsIcon color="secondary" />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                    Summa Cum Laude
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                GWA 1.01 — first in BulSU history
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} flex={1}>
                        <Paper sx={{ p: 2, height: "100%" }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <WorkIcon color="secondary" />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                    Citco Trainee
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Acquires hands-on experience with enterprise IT practices aligned with the industry
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2, height: "100%" }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <SchoolIcon color="secondary" />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                    #1 ATA Intern
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Accenture SAP-ABAP Track (2024–2025)
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2, height: "100%" }}>
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <StarIcon color="secondary" />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                    Tech Champ
                                </Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                Dynamic IT leader with more than a decade of experience in academic and organizational
                                management. Passionate about leveraging technology to drive innovation. Skilled in web and
                                mobile app development, project management, and digital solutions, with a proven ability to
                                deliver impactful results through strategic decision-making and sound judgment.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Fade>

            {/* Education & Experience */}
            <Divider sx={{ mb: 5 }} />
            <Grid container spacing={3} alignItems="stretch" sx={{ mb: 5 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <SchoolIcon color="secondary" />
                            <Typography variant="h6">Education</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Bulacan State University — BS IT (Web & Mobile)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2021–2025
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • Summa Cum Laude (GWA 1.01), first in university history
                        </Typography>
                        <Typography variant="body2">• Best Presenter; President’s Lister; Gold Gear Awards</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            CEIS Malolos — STEM, CSS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2019–2021
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • Batch Valedictorian — first With Highest Honors
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            St. Mary’s Academy of Hagonoy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2015–2019
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • Batch Valedictorian
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} flex={1}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <WorkIcon color="secondary" />
                            <Typography variant="h6">Professional Experience</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Citco International Support Services Ltd. — Trainee
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2025–Present
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • Lessons on enterprise IT operations; system development; industry standards
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Freelance Educational Technology Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2024–Present
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • Gamified presentations, mobile apps, instructional materials
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Accenture Technology Academy — Student Intern (SAP-ABAP)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2024–2025
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            • #1 among interns; enterprise app development & ERP
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Leadership & Activities */}
            <Divider sx={{ mb: 5 }} />
            <Grid container spacing={3} alignItems="stretch" sx={{ mb: 5 }}>
                <Grid item xs={12} md={6} flex={1}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <GroupsIcon color="secondary" />
                            <Typography variant="h6">Leadership & Activities</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Tabs
                            value={leadTab}
                            onChange={(_, v) => setLeadTab(v)}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            {leadership.map((g) => (
                                <Tab key={g.key} icon={<GroupsIcon />} iconPosition="start" label={g.short} />
                            ))}
                        </Tabs>
                        <Fade in key={leadership[leadTab].key} timeout={300}>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    {leadership[leadTab].org}
                                </Typography>
                                <Stack spacing={1.5}>
                                    {leadership[leadTab].roles.map((r, i) => (
                                        <Box key={`${leadership[leadTab].key}-${r.role}`}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip size="small" label={r.years} color="secondary" variant="outlined" />
                                                <Typography variant="body2">{r.role}</Typography>
                                            </Stack>
                                            {i < leadership[leadTab].roles.length - 1 ? <Divider sx={{ my: 1 }} /> : null}
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Fade>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <BuildIcon color="secondary" />
                            <Typography variant="h6">Projects & Research</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Stepper orientation="vertical" activeStep={projects.length - 1} nonLinear>
                            {projects.map((p) => (
                                <Step key={p.title} expanded>
                                    <StepLabel icon={<EmojiEventsIcon color="secondary" />}>
                                        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {p.title}
                                            </Typography>
                                            <Chip size="small" label={p.award} color="secondary" variant="outlined" />
                                        </Stack>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {p.event}
                                        </Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Paper>
                </Grid>
            </Grid>

            {/* Speaking, Skills, Awards */}
            <Divider sx={{ mb: 5 }} />
            <Grid container spacing={3} alignItems="stretch" sx={{ mb: 5 }}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <MicIcon color="secondary" />
                            <Typography variant="h6">Speakerships</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2">• Hello JPCS World, CEU (2024)</Typography>
                        <Typography variant="body2">• SpeakIT, BulSU (2024)</Typography>
                        <Typography variant="body2">• NU Baliwag Leadership Summit (2023)</Typography>
                        <Typography variant="body2">• Unlocking Your Potential, BulSU Meneses (2023)</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <BuildIcon color="secondary" />
                            <Typography variant="h6">Skills</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2">• Digital/Media Literacy; Teamwork; EQ; Goal-Oriented</Typography>
                        <Typography variant="body2">• Agile; Git; Web & Mobile; OOP</Typography>
                        <Typography variant="body2">• Tools: Photoshop, Figma, Canva</Typography>
                        <Typography variant="body2">• Trello, Notion, Monday.com; Google/Microsoft</Typography>
                        <Typography variant="body2">• VS Code, DBeaver, VirtualBox</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: "100%" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                            <EmojiEventsIcon color="secondary" />
                            <Typography variant="h6">Awards</Typography>
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2">• Summa Cum Laude — BulSU (2025)</Typography>
                        <Typography variant="body2">• Valedictorian — CEIS (2021)</Typography>
                        <Typography variant="body2">• Valedictorian — SMAH (2019)</Typography>
                        <Typography variant="body2">• Multiple national/regional innovation awards</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Bookshelf (Subject Search via Open Library) */}
            <Divider sx={{ mb: 5 }} />
            <Fade in timeout={700}>
                <Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Books that inspire me
                        </Typography>
                        {loadingBooks ? <CircularProgress size={16} /> : null}
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
                        {BOOK_SUBJECTS.map((s) => (
                            <Chip
                                key={s}
                                label={s.charAt(0).toUpperCase() + s.slice(1)}
                                color={s === subject ? "secondary" : "default"}
                                onClick={() => setSubject(s)}
                                variant={s === subject ? "filled" : "outlined"}
                            />
                        ))}
                    </Stack>
                    <Fade in key={subject} timeout={400}>
                        <Box>
                            <CardList
                                type="subject"
                                subject={subject}
                                limit={4}
                                onLoadingChange={setLoadingBooks}
                                emptyMessage={`No results found for ${prettySubject}.`}
                            />
                        </Box>
                    </Fade>
                </Box>
            </Fade>
        </Container>
    );
}
