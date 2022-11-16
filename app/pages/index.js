import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { AppTheme } from './../lib/MUITheme';
import NavBar from './../components/NavBar/NavBar';
import { Button, Card, CardContent, Chip } from '@mui/material';

import {
  Adobe_Ae_Skill_Badge, Adobe_Ai_Skill_Badge, Adobe_Au_Skill_Badge, Adobe_Pr_Skill_Badge,
  BlankImg, EphrineAppsLogo, WorkIcon, SkillsIcon, EducationIcon, BooksIcon, BitVedasLogo, EternalBlizzLogo, DevSuper, Adobe_Ps_Skill_Badge, Android_Skill_Badge, Blender_Skill_Badge, C_Plus_Skill_Badge, C_Sharp_Skill_Badge, HTML5_Skill_Badge, Java_Skill_Badge, NextJS_Skill_Badge, NodeJS_Skill_Badge, ReactJs_Skill_Badge, Rx_Skill_Badge, Sass_Skill_Badge, Unity3d_Skill_Badge, WebDev_Skill_Badge,
  Dev_Cowboy_Hat
} from '../lib/assets';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Jump2Top from '../components/Jump2Top/Jump2Top';
import Footer from '../components/footer/footer';
import Link from 'next/link';

const myLoader = ({ src }) => {
  return `${src}`;
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <ThemeProvider theme={AppTheme} >
        <div className={styles.container} >
          <Head>
            <title>Devesh Chaudhari | DeveshRx</title>
            <meta name="description" content="  " />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div id="top" ></div>
          <NavBar />
          <Header />
          <AboutMe />

          <ExploreSection />
          <br />
          <CompaniesSection />
          {/* <br />
          <BlogPosts />
          */} <br />
          <span id="skills"></span>
          <MySkills />
          <br/><br/><br/>
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
    return (<div className={styles.mHeader}>
      <div className={styles.mHeaderCol}>
        <div className={styles.mHeaderRow1}>
          <h1 className={styles.mainTitle}>Hi, I'm <span >Devesh</span><br />Welcome to My <span>Metaverse</span></h1>

        </div>

        <div className={styles.mHeaderRow2}>
          <Image
            className={styles.headerImage}
            src={DevSuper}
            loader={myLoader}
          />

        </div>
      </div>




    </div>
    );
  }
}


class ExploreSection extends React.Component {
  constructor(props) {
    super(props);
    this.ExpoCard = this.ExpoCard.bind(this);
  }

  render() {
    return (<section className={styles.ExploreSectionBody}>

      <div className={styles.ESSec}>
        <h1 className={styles.ExpTitle}>Explore</h1>

        {this.ExpoCard(WorkIcon, "My Work", "/work")}
        {this.ExpoCard(SkillsIcon, "Skills", "/skills")}

        {/*   {this.ExpoCard(EducationIcon, "Academics", "/academics")}
       */}  {this.ExpoCard(BooksIcon, "Books", "/books")}


      </div>

    </section>);
  }

  ExpoCard(icon, text, link) {
    return (<Link href={link} >

      <Card variant='outlined' className={styles.ExpCard}>
        <CardContent sx={{ margin: '0px', padding: '0px', paddingBottom: '0px' }}>
          <div className={styles.ExpCardCol}>

            <div className={styles.ExpCardRow1}>
              <Image
                className={styles.ExpIcon}
                src={icon}
                loader={myLoader}
              />
            </div>

            <div className={styles.ExpCardRow2}>
              &nbsp;
              {text}

            </div>

          </div>
        </CardContent>
      </Card>

    </Link>
    )
  }


}


class CompaniesSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<section className={styles.CompanySection}>
      <br /><br />

      {/*   <div className={styles.BrandSub} >
        <h1>Brands</h1>
        <p>Creating Great Brand is Art
          {/* My Experience in Building various Brands have taught me that it's a Art. *
        </p>
      </div> */}

      {/* Bitedas */}
      <Link href="https://bitvedas.com" target="_blank">

        <div
          className={styles.Comp}
        >
          <Image
            className={styles.CompSecImage}
            src={BitVedasLogo}

            loader={myLoader}
          />

        </div>

      </Link>




      {/* Raven Claw Apps & Games (Ephrine Apps) */}
      <Link href="https://www.ephrine.in" target="_blank">
        <div
          className={styles.Comp}  >
          <Image
            className={styles.CompSecImage}
            src={EphrineAppsLogo}
            loader={myLoader}
          />
        </div>
      </Link>


      {/* Eternal Blizz */}
      <Link href="https://www.youtube.com/channel/UCfodHtZYdKhHixuSKupSzLA" target="_blank">
        <div
          className={styles.Comp}
        >
          <Image
            className={styles.CompSecImage}
            src={EternalBlizzLogo}
            loader={myLoader}
          />

        </div>
      </Link>

      <br /><br />

    </section>
    );
  }
}


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.Post = this.Post.bind(this);
  }

  render() {
    return (<section className={styles.BlogPostsSection}>
      <br />
      <h1 className={styles.BlogSecTitle}>Blog</h1>
      <br />
      <div className={styles.posts}>
        {this.Post()}
        {this.Post()}
        {this.Post()}
        {this.Post()}
        {this.Post()}

      </div>
      <br />
      <div className={styles.BtnCenter}>
        <Button variant='contained' color="secondary" sx={{ borderRadius: 10, width: '150px' }} endIcon={<ArrowForwardIosIcon />}>View More</Button>
      </div>


    </section>);
  }

  Post() {

    return (<Card variant='outlined' className={styles.BlogPost} >
      <div className={styles.PostCol}>
        <div className={styles.PostRow1}>
          <Image
            className={styles.PostThumb}
            src={BlankImg}
            loader={myLoader}
          />
        </div>

        <div className={styles.PostRow2}>
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>


        </div>

      </div>


    </Card>);
  }
}

const chipCategoryAll = 0;
const chipCategoryCreator = 1;
const chipCategoryWeb = 2;
const chipCategoryMobile = 3;
const chipCategoryGame3D = 4;
const chipCategoryHealth = 5;


class MySkills extends React.Component {

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
      <h1 className={styles.SkillsTitle} >Skills</h1>
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


      <br />
      <div className={styles.BtnCenter}>
        <Button href="/skills" variant='contained' color="secondary" sx={{ borderRadius: 10, width: '150px' }} endIcon={<ArrowForwardIosIcon />}>Learn More</Button>
      </div>



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


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.AboutMe}>
        <h1>About Me</h1>

        <div className={styles.AboutMeCol}>
          <div className={styles.AboutMeRow1}>
            <Image
              className={styles.DevCowBoyHat_Image}
              src={Dev_Cowboy_Hat}
              loader={myLoader}
            />

          </div>

          <div className={styles.AboutMeRow2}>
            <p>
              Hi there!&#128075;My name's <span>Devesh Chaudhari</span> and I'm lover of all things tech, music, science, healthcare and more.
              I'm a <span>Software Developer</span>, <span>Entrepreneur & Content Creator</span>. I'm passionate about the world of <span>Technology</span> & <span>Medicine</span>.
              I am a self-taught software coder. I have been coding for more than 15 years and I run my own Business.<br />Apart from Tech Field, i'm a <span>Pharmacist</span> graduated from the University of Mumbai, India (& yes, i'm Licensed Pharmacist &#128521;) ...
            </p>
          </div>
        </div>
        <br />
      </section>
    );
  }
}








