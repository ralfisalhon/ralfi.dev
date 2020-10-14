import coverloveLogo from 'assets/images/round_icons/coverlove.png';
import hearoLogo from 'assets/images/round_icons/hearo.png';
import igurmeLogo from 'assets/images/round_icons/igurme.png';
import jamblrLogo from 'assets/images/round_icons/jamblr.png';
import polysentryLogo from 'assets/images/round_icons/polysentry.png';
import potenciaLogo from 'assets/images/round_icons/potencia.png';
import redorblueLogo from 'assets/images/round_icons/redorblue.png';
import tunewiseLogo from 'assets/images/round_icons/tunewise.png';
import claimmateLogo from 'assets/images/round_icons/claimmate.png';

import jamblrSS1 from 'assets/images/projects/jamblr/SS1.jpg';
import jamblrSS2 from 'assets/images/projects/jamblr/SS2.jpg';
import jamblrSS3 from 'assets/images/projects/jamblr/SS3.jpg';
import jamblrSS4 from 'assets/images/projects/jamblr/SS4.jpg';

import tunewiseSS1 from 'assets/images/projects/tunewise/SS1.png';
import tunewiseSS2 from 'assets/images/projects/tunewise/SS2.png';
import tunewiseSS3 from 'assets/images/projects/tunewise/SS3.png';
import tunewiseSS4 from 'assets/images/projects/tunewise/SS4.png';

import igurmeSS1 from 'assets/images/projects/igurme/SS1.png';
import igurmeSS2 from 'assets/images/projects/igurme/SS2.png';
import igurmeSS3 from 'assets/images/projects/igurme/SS3.png';
import igurmeSS4 from 'assets/images/projects/igurme/SS4.png';

import coverloveSS1 from 'assets/images/projects/coverlove/SS1.png';
import coverloveSS2 from 'assets/images/projects/coverlove/SS2.png';
import coverloveSS3 from 'assets/images/projects/coverlove/SS3.png';

import polysentrySS1 from 'assets/images/projects/polysentry/SS1.png';
import polysentrySS2 from 'assets/images/projects/polysentry/SS2.png';
import polysentrySS3 from 'assets/images/projects/polysentry/SS3.png';

import potenciaSS1 from 'assets/images/projects/potencia/SS1.png';
import potenciaSS2 from 'assets/images/projects/potencia/SS2.png';
import potenciaSS3 from 'assets/images/projects/potencia/SS3.png';

const PROJECTS = [
  {
    name: 'Red or Blue',
    logo: redorblueLogo,
    color: 'rgb(195, 55, 238)',
    title: 'A 2D puzzle platformer game with a twist.',
    description: [
      'Red or Blue started as our final project for Professor Jason Wiser’s Game Design class at Tufts University. The game opens with our protagonist falling asleep in his bed and waking up in a dream-like version of his school. Armed with magic 3D glasses, he has to find a way to escape while facing the bullies that harass him in real life. ',
      // 'Traditional 2D platformers often focus on mutating gameplay mechanics, such as giving the player different power ups, in order to change the way the player interacts with the game world. With Red or Blue, we wanted the game world itself to change and for the players to use those changes to their own advantage. Thus, we purposefully limited the player’s abilities so he is relatively powerless and has to rely on the red/blue switching to overcome challenges.',
      // 'On the other hand, we wanted the gameplay to feel smooth and key presses to feel predictable, so we took a page out of Super Mario World’s playbook and standardized all movements to align with the tile map. Finally, we felt like too many modern platformers relied on pure timing and reflex to make their games difficult. This results in frustrating gameplay where the players dying over and over again until they finally beat the level through muscle memory. In Red or Blue, we reward the player for being patient, observant, and for using their memory to tackle puzzles — the challenge comes from discovering the path forward rather than the execution itself.',
      // 'For most of us who made Red or Blue, this was our first time creating a game. We had a lot of fun working on it, and received many praises for its fun mechanics, tight gameplay, and overall polish.',
      'I designed and developed main character and bully animations, created various assets and levels.',
    ],
    awards: ['Phase 2 Submissions, Boston Festival of Indie Games'],
    platforms: {
      github: 'https://github.com/mohsr/red-or-blue',
      website: 'https://redorbluegame.wixsite.com/redorblue',
    },
    video: 'https://www.youtube.com/embed/9Tag0OPSJdg',
    techs: ['Unity, C#, Photoshop, PyxelEdit'],
    contributors: 'Daniel Cetlin, Mohsin Rizvi, Tommy Tang, and Tommy Zhu',
  },
  {
    name: 'Jamblr',
    logo: jamblrLogo,
    color: '#2f2f2f',
    title: 'Your music discovery and playlist creation platform.',
    description: [
      'Jamblr is originally a Polyhack 2018 project, where I worked on it with Mohsin Rizvi and Nihal Pai.',
      'I further designed, developed, and optimized Jamblr for 4 months during my own time, with over 200 commits.',
      'It currently has a 5.0 rating on the App Store with over 1000 downloads.',
    ],
    awards: ['HubSpot Engineering Values Award, Polyhack 2018'],
    platforms: {
      github: 'https://github.com/ralfisalhon/jamblr-polyhack2018',
      appstore: 'https://apple.co/2MMTKtR',
    },
    screenshots: [jamblrSS1, jamblrSS2, jamblrSS3, jamblrSS4],
    techs: ['React Native, Node.js, Heroku, Spotify API, Testflight'],
    contributors: 'Mohsin Rizvi, Nihal Pai',
  },
  {
    name: 'iGurme',
    logo: igurmeLogo,
    color: 'chocolate',
    title: 'An e-commerce app designed to test SDK features.',
    description: [
      'I developed iGurme during my 2019 Summer internship at Insider. It is a demo app written with React Native to test and display features of the Insider Mobile SDK. It supports iOS and Android.',
      'iGurme is currently used during sales and pitch meetings to promote Insider’s new SDK features for both iOS and Android devices in over a dozen countries.',
    ],
    platforms: {
      github: 'https://github.com/ralfisalhon/iGurme-Docs',
    },
    screenshots: [igurmeSS1, igurmeSS2, igurmeSS3, igurmeSS4],
    techs: ['React Native, Firebase API, Insider API'],
  },
  {
    name: 'PolySentry',
    logo: polysentryLogo,
    color: 'rgb(1, 163, 164)',
    title: 'Security platform that provides real-time threat protection.',
    description: [
      'I architected, developed, and documented the app of a security platform that provides real-time threat protection.',
      'This was remote freelance work I did for Pushlogic.',
    ],
    platforms: {
      appstore: 'https://apps.apple.com/us/app/polysentry/id1468691133',
      playstore: 'https://play.google.com/store/apps/details?id=com.polysentry',
      website: 'https://polysentry.com/',
    },
    screenshots: [polysentrySS1, polysentrySS2, polysentrySS3],
    techs: ['React Native, Node.js, Firebase API, Testflight'],
  },
  {
    name: 'TuneWise',
    logo: tunewiseLogo,
    color: 'rgb(100, 43, 168)',
    title: 'Music centered mobile party game.',
    description: 'Visit https://tunewise.app and give it a try. My React pastime project, improved upon Polyhack 2019',
    awards: ['Best Mobile App, Polyhack 2019'],
    platforms: {
      github: 'https://github.com/ralfisalhon/TuneWise',
      website: 'https://tunewise.app',
    },
    screenshots: [tunewiseSS1, tunewiseSS2, tunewiseSS3, tunewiseSS4],
    techs: ['React Native, React.js, Node.js, Heroku'],
    contributors: 'Mohsin Rizvi, Nihal Pai, San Akdag',
  },
  {
    name: 'Potencia',
    logo: potenciaLogo,
    color: 'rgb(35, 105, 246)',
    title: 'A social outreach and education platform.',
    // description: 'Free lance work... Somerville',
    platforms: {
      github: 'https://github.com/ralfisalhon/Potentia',
      website: 'https://www.potenciaus.org/',
    },
    screenshots: [potenciaSS1, potenciaSS2, potenciaSS3],
    techs: ['React Native, Node.js, Heroku'],
    contributors: 'Nihal Pai, Manish Aryal',
    wideSS: true,
  },
  {
    name: 'CoverLove',
    logo: coverloveLogo,
    color: 'rgb(243, 156, 18)',
    title: 'A simple tool to create new playlist cover art.',
    description: [
      'I made and deployed this app in under 24 hours as a self-hackathon',
      'To my surprise, it is my most downloaded app ever with over 10k downloads.',
    ],
    platforms: {
      github: 'https://github.com/ralfisalhon/coverlove',
      appstore: 'https://apps.apple.com/us/app/coverlove-cover-art-maker/id1458456335',
    },
    screenshots: [coverloveSS1, coverloveSS2, coverloveSS3],
    techs: ['React Native'],
  },
  {
    name: 'Hearo',
    logo: hearoLogo,
    color: 'rgb(67, 115, 130)',
    title: 'Your conference call personal assistant.',
    // description:
    //   'LOREM ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    platforms: {
      github: 'https://github.com/ralfisalhon/Hearo-noSensitive',
    },
    video: 'https://www.youtube.com/embed/QadrLYQTbFI',
    techs: ['React Native, Voximplant API, Google Speech-to-Text API, Twilio API'],
    contributors: 'Harun Kaneti, Eytan Nahmiyas',
  },
  {
    name: 'ClaimMate',
    logo: claimmateLogo,
    color: 'rgb(18, 47, 66)',
    title: 'Global Legal Hackathon 2019 finalist.',
    // description: 'Done in 48 hours. I slept like 5 hours.',
    awards: ['2nd Place, Global Legal Hackathon 2019'],
    platforms: {
      github: 'https://github.com/ralfisalhon/CLAIMate',
      website: 'https://globallegalhackathon.com/',
    },
    video: 'https://www.youtube.com/embed/3uotkVSIglA',
    techs: ['React Native'],
  },
];

export default PROJECTS;
