import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Skills.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { AppTheme } from './../lib/MUITheme';
import NavBar from './../components/NavBar/NavBar';
import { Button, Card, CardActions, CardContent, Chip } from '@mui/material';
import {
    BlankImg,
    Dev_Skills,
    AndroidDev_Banner,
    WebDev_Banner,
    BusinessDev_Banner,
    GameDev_Banner,
    VideoEditing_Banner,
    ContentCreation_Banner,
    PharmaDrug_Banner,
    Learning_Banner,
    Adobe_Ae_Skill_Badge, Adobe_Ai_Skill_Badge, Adobe_Au_Skill_Badge, Adobe_Pr_Skill_Badge,
    Adobe_Ps_Skill_Badge, Android_Skill_Badge, Blender_Skill_Badge, C_Plus_Skill_Badge, C_Sharp_Skill_Badge, HTML5_Skill_Badge, Java_Skill_Badge, NextJS_Skill_Badge, NodeJS_Skill_Badge, ReactJs_Skill_Badge, Rx_Skill_Badge, Sass_Skill_Badge, Unity3d_Skill_Badge, WebDev_Skill_Badge,

} from '../lib/assets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../components/footer/footer';
import { TabContext, TabPanel } from "@mui/lab";
import Jump2Top from "../components/Jump2Top/Jump2Top";
const myLoader = ({ src }) => {
    return `${src}`;
};


export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }

    render() {
        return (
            <ThemeProvider theme={AppTheme} >
                <div className={styles.container}>
                    <Head>
                        <title>My Skills & Strength | Devesh Chaudhari | DeveshRx </title>
                        <meta name="description" content="  " />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <NavBar />
                    <Header />
                    <br />
                    <p className={styles.About}>
                        <i>
                            My skills are my passions. I love learning new skills and I love teaching others new skills. I have a lot of different interests, but I can't imagine not continuing to learn new things. I Prefer to be Generalist instead of Specialist
                        </i>
                    </p>
                    <div>
                        <MySkillsTab />
                    </div>
                    <br/><br/>

                    <Card variant="outlined" className={styles.AndroidAppDevBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader
                                title="Android App Development"
                                subtitle="I am a passionate android app developer and love to code in Java. I have been working with Android SDK since 2015. From Android Development to UI/UX Design, I specialize in all things for Android. My First App was published on Google Play Store in Year 2015 when i was in college. ever since then i build & published 30+ Android Apps on Google Play Store & build a succesfull side-hustle."
                                isRev={false}
                                thumb={AndroidDev_Banner} />
                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.WebDevBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader title="Web Development"
                                subtitle="Websites, Web Apps & Cloud has become one of the core infrastructure essential for any business. Whether it's building a website, blog or developing an ecommerce store, I have the skills essential to get the job done right. my journey to web dev started when i was in school learning HTML,CSS & JavaScript trying to create website."
                                isRev={true}
                                thumb={WebDev_Banner} />

                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.BusinessBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader
                                title="Business"
                                subtitle="We are living in the great Age of Capatilism, where everything has become commerciliased weather that be your attention, education or your skills. Hence, Knowing Fundamentals of business is essential to navigate in modern world. Skills such as Branding, Marketing & Selling are always going to be core in any feild (personal branding, startup, IT etc)."
                                isRev={false}
                                thumb={BusinessDev_Banner}
                            />
                        </CardContent>
                    </Card>


                    <Card variant="outlined" className={styles.GamingBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader title="Game Development"
                                subtitle="Gaming has always been in my DNA, weather that be Playing a game or Building one. Skill of building games is very special that only few manage to master it because to make a Awesome Game you need combination of various skills (music, psycology, coding, storytelling, gameplay UI/UX etc) to build a game."
                                isRev={true}
                                thumb={GameDev_Banner}
                            />
                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.VideoEditingBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader
                                title="Video Editing"
                                subtitle="I have always been interested in video editing, so I decided to take the leap and learn how to do it. Back in my days Windows Movie Maker was big thing & i learned editing videos on it then later shifted to Adobe Premier Pro. Once I learned the basics, I was able to start editing videos for fun and for YouTube.                            The best video editors can create a video that is both entertaining and informative. The most important thing to remember when editing a video is to go for quality over quantity. The best videos are not the longest, but the ones that get your point across. It's important that you know what your viewers want to see in your video and what they are willing to watch."
                                isRev={false}
                                thumb={VideoEditing_Banner} />

                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.PharmaHealthBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader title="Pharmacy,Medicine &amp; Healthcare"
                                subtitle="As a Science Nerd, STEM Research, Medicine & Healthcare has always being close to my heart. I'm a Licensed Pharmacist, B.Pharmacy Graduate from University Of Mumbai."
                                thumb={PharmaDrug_Banner}
                                isRev={true}
                            />

                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.ContentCreatorhBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader title="Content Creator"
                                subtitle="Content creators are becoming more and more popular on YouTube and other social media platforms. I share my thoughts,wisdom, ideas, and life stories with my audiences through video, pictures, or writing."
                                isRev={false}
                                thumb={ContentCreation_Banner} />

                        </CardContent>
                    </Card>

                    <Card variant="outlined" className={styles.MasterLearningBg_AlphaHeader}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <AlphaHeader title="Master in Learning"
                                subtitle="Among all other skills, there is one skill which is hard to learn i.e Master in Learning"
                                isRev={true}
                                thumb={Learning_Banner} />

                        </CardContent>
                    </Card>

                    <Jump2Top />
                    <Footer />
                </div>
            </ThemeProvider>
        );
    }
}



class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>

                <div className={styles.mTitle}>
                    <h1 >
                        Skills

                    </h1 >
                </div>

                <div >
                    <Image
                        className={styles.headerImage}
                        src={Dev_Skills}
                        loader={myLoader}
                    />
                </div>



            </div>
        );
    }
}




class AlphaHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const isColRev = this.props.isRev;
        const thumb = this.props.thumb;

        var mColStyle;
        if (isColRev == true) {
            mColStyle = styles.AlphaHeaderColRev;
        } else {
            mColStyle = styles.AlphaHeaderCol;
        }

        return (<div className={styles.AlphaHeader}>
            <h1 className={styles.AlphaHeaderTitle}>{title}</h1>

            <div className={mColStyle}>
                <div className={styles.AlphaHeaderRow1}>
                    <div className={styles.AlphaHeaderDesc}>{subtitle}</div>
                </div>
                <div className={styles.AlphaHeaderRow2}>
                    <div className={styles.AlphaHeaderImg}>
                        <Image
                            src={thumb}
                            loader={myLoader} />
                    </div>
                </div>



            </div>

        </div>


        );
    }
}





const chipCategoryAll = 0;
const chipCategoryCreator = 1;
const chipCategoryWeb = 2;
const chipCategoryMobile = 3;
const chipCategoryGame3D = 4;
const chipCategoryHealth = 5;


class MySkillsTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Category: chipCategoryAll
        }
        this.SkillBadge = this.SkillBadge.bind(this);
        this.CategoryChip = this.CategoryChip.bind(this);
    }

    render() {
        return (<section className={styles.SkillSection}>
             <br />
      <h1 className={styles.SkillsTitle} >Overview</h1>
      <br />
       <div className={styles.SkillCategoryChips}>

                {this.CategoryChip(this.state.Category)}
            </div>

            <br />

            <TabContext value={this.state.Category} sx={{ margin: 0, padding: 0 }}>

                <TabPanel value={chipCategoryAll} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(Rx_Skill_Badge, "Pharmacist", "Registered Pharmacist by Profession")}

                        {this.SkillBadge(Android_Skill_Badge, "Android App Development", "Turning App Idea into Reality")}
                        {this.SkillBadge(WebDev_Skill_Badge, "Web Development", "Full stack web development")}

                        {this.SkillBadge(Blender_Skill_Badge, "Blender", "Creating 3D Models & Animations")}
                        {this.SkillBadge(Unity3d_Skill_Badge, "Unity 3D", "Game Development & Metaverse")}

                        {this.SkillBadge(Java_Skill_Badge, "Java", "Programming Language")}

                        {this.SkillBadge(Adobe_Ae_Skill_Badge, "Adobe After Effects", "Creating Visual Effects for Video")}
                        {this.SkillBadge(Adobe_Ai_Skill_Badge, "Adobe Illustrator", "Creating Stunning Vector Graphics")}
                        {this.SkillBadge(Adobe_Au_Skill_Badge, "Adobe Audition", "Sound Enginnering for various puropses")}
                        {this.SkillBadge(Adobe_Pr_Skill_Badge, "Adobe Premier Pro", "Stunning Video Editing skill")}
                        {this.SkillBadge(Adobe_Ps_Skill_Badge, "Adobe Photoshop", "Editing & Creating Beautiful Images")}

                        {this.SkillBadge(C_Plus_Skill_Badge, "C/C++", "Programming Language")}
                        {this.SkillBadge(C_Sharp_Skill_Badge, "C#", "Programming Language")}

                        {this.SkillBadge(HTML5_Skill_Badge, "HTML5", "Web Page Designing with Modern Web Standards")}
                        {this.SkillBadge(NextJS_Skill_Badge, "Next JS", "Full-stack Javascript framework")}
                        {this.SkillBadge(NodeJS_Skill_Badge, "Node JS", "Server side development")}
                        {this.SkillBadge(ReactJs_Skill_Badge, "React JS", "Front end development")}
                        {this.SkillBadge(Sass_Skill_Badge, "Sass", "Designing Beautiful Web Pages")}

                    </div>

                </TabPanel>

                <TabPanel value={chipCategoryCreator} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(Adobe_Ae_Skill_Badge, "Adobe After Effects", "Creating Visual Effects for Video")}
                        {this.SkillBadge(Adobe_Ai_Skill_Badge, "Adobe Illustrator", "Creating Stunning Vector Graphics")}
                        {this.SkillBadge(Adobe_Au_Skill_Badge, "Adobe Audition", "Sound Enginnering for various puropses")}
                        {this.SkillBadge(Adobe_Pr_Skill_Badge, "Adobe Premier Pro", "Stunning Video Editing skill")}
                        {this.SkillBadge(Adobe_Ps_Skill_Badge, "Adobe Photoshop", "Editing & Creating Beautiful Images")}
                        {this.SkillBadge(Blender_Skill_Badge, "Blender", "Creating 3D Models & Animations")}

                    </div>

                </TabPanel>

                <TabPanel value={chipCategoryWeb} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(WebDev_Skill_Badge, "Web Development", "Full stack web development")}

                        {this.SkillBadge(HTML5_Skill_Badge, "HTML5", "Web Page Designing with Modern Web Standards")}
                        {this.SkillBadge(NextJS_Skill_Badge, "Next JS", "Full-stack Javascript framework")}
                        {this.SkillBadge(NodeJS_Skill_Badge, "Node JS", "Server side development")}
                        {this.SkillBadge(ReactJs_Skill_Badge, "React JS", "Front end development")}
                        {this.SkillBadge(Sass_Skill_Badge, "Sass", "Designing Beautiful Web Pages")}

                    </div>


                </TabPanel>
                <TabPanel value={chipCategoryMobile} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(Android_Skill_Badge, "Android App Development", "Turning App Idea into Reality")}
                        {this.SkillBadge(Java_Skill_Badge, "Java", "Programming Language")}
                        {this.SkillBadge(Unity3d_Skill_Badge, "Unity 3D", "Game Development & Metaverse")}

                    </div>

                </TabPanel>
                <TabPanel value={chipCategoryGame3D} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(Unity3d_Skill_Badge, "Unity 3D", "Game Development & Metaverse")}
                        {this.SkillBadge(Blender_Skill_Badge, "Blender", "Creating 3D Models & Animations")}


                    </div>
                </TabPanel>
                <TabPanel value={chipCategoryHealth} sx={{ margin: 0, padding: 0 }}>
                    <div className={styles.SkillTable}>
                        {this.SkillBadge(Rx_Skill_Badge, "Pharmacist", "Registered Pharmacist by Profession")}

                    </div>

                </TabPanel>

            </TabContext>


            <br />{/* 
      <div className={styles.BtnCenter}>
        <Button href="/skills" variant='contained' color="secondary" sx={{ borderRadius: 10, width: '150px' }} endIcon={<ArrowForwardIosIcon />}>Learn More</Button>
      </div> */}



        </section>);
    }

    SkillBadge(icon, title, desc) {


        return (<div className={styles.SkillBadge}>
            <div className={styles.SkillBadgeCol}>
                <div className={styles.SkillBadgeRow1}>

                    <Image src={icon}
                        className={styles.SkillBadgeImage}
                        loader={myLoader}
                    />
                </div>

                <div className={styles.SkillBadgeRow2}>

                    <span className={styles.SkillBadgeTitle}>{title}</span><br />
                    <span className={styles.SkillBadgeDesc}>{desc}</span>

                </div>
            </div>

        </div>);

    }

    CategoryChip(selected) {

        var chipCategoryAllColor = "default";
        var chipCategoryAllVarient = "outlined";

        var chipCategoryCreatorColor = "default";
        var chipCategoryCreatorVarient = "outlined";

        var chipCategoryWebColor = "default";
        var chipCategoryWebVarient = "outlined";

        var chipCategoryMobileColor = "default";
        var chipCategoryMobileVarient = "outlined";

        var chipCategoryGame3DColor = "default";
        var chipCategoryGame3DVarient = "outlined";

        var chipCategoryHealthColor = "default";
        var chipCategoryHealthVarient = "outlined";

        if (selected == chipCategoryAll) {
            chipCategoryAllColor = "secondary";
            chipCategoryAllVarient = "filled";

        } else if (selected == chipCategoryCreator) {
            chipCategoryCreatorColor = "secondary";
            chipCategoryCreatorVarient = "filled";

        } else if (selected == chipCategoryWeb) {
            chipCategoryWebColor = "secondary";
            chipCategoryWebVarient = "filled";

        } else if (selected == chipCategoryMobile) {
            chipCategoryMobileColor = "secondary";
            chipCategoryMobileVarient = "filled";

        } else if (selected == chipCategoryGame3D) {
            chipCategoryGame3DColor = "secondary";
            chipCategoryGame3DVarient = "filled";

        } else if (selected == chipCategoryHealth) {
            chipCategoryHealthColor = "secondary";
            chipCategoryHealthVarient = "filled";

        }



        return (
            <div >
                <Chip
                    className={styles.chipBody}
                    color={chipCategoryAllColor}
                    variant={chipCategoryAllVarient}
                    label="All"
                    clickable
                    onClick={() => {
                        this.setState({ Category: chipCategoryAll });
                    }}
                />
                <Chip
                    className={styles.chipBody}

                    label="Creator"
                    color={chipCategoryCreatorColor}
                    variant={chipCategoryCreatorVarient}
                    clickable

                    onClick={() => {
                        this.setState({ Category: chipCategoryCreator });
                    }}
                />

                <Chip
                    label="Web"
                    className={styles.chipBody}

                    color={chipCategoryWebColor}
                    variant={chipCategoryWebVarient}
                    clickable

                    onClick={() => {
                        this.setState({ Category: chipCategoryWeb });
                    }}
                />

                <Chip
                    label="Mobile"
                    className={styles.chipBody}

                    color={chipCategoryMobileColor}
                    variant={chipCategoryMobileVarient}
                    clickable

                    onClick={() => {
                        this.setState({ Category: chipCategoryMobile });
                    }}
                />

                <Chip
                    className={styles.chipBody}

                    label="Game & 3D Modelling"
                    color={chipCategoryGame3DColor}
                    variant={chipCategoryGame3DVarient}
                    clickable

                    onClick={() => {
                        this.setState({ Category: chipCategoryGame3D });
                    }}
                />

                <Chip
                    className={styles.chipBody}

                    label="Healthcare"
                    color={chipCategoryHealthColor}
                    variant={chipCategoryHealthVarient}
                    clickable

                    onClick={() => {
                        this.setState({ Category: chipCategoryHealth });
                    }}
                />

            </div>
        );

    }

    SkillBadgeDisplay(category) {

    }

}



