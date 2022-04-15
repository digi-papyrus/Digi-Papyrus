import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./AboutUsPage.sass";
import { Parallax } from "react-parallax";
import ReferenceCard from "../References/ReferenceCard";
import nirjal from "../../nirjal.png";
import team from "../../team.jpg";
import mahip from "../../mahip.jpg";
import nigam from "../../nigam.jpg";
import { Link } from "react-router-dom";


export default function AboutUsPage() {
  return (
    <div className="AboutUsPage">
      <div className="Page1">
        <div className="Header">
          <h1>Digi-Papyrus</h1>
          <p>Think Opening Imagination as you turn the pages of book !</p>
        </div>
        <div className="Bottom">
          <p>Swipe Down To Know More About Digi-Papyrus</p>
          <BsChevronDoubleDown />
        </div>
      </div>
      <div className="Page2">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${offset * 100 - 30}%)` }}>
              ABOUT US
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <p>
            I want you close your eyes and think about the last book you have
            read. Now imagine how would that reading experience be different if
            it were designed in a web-based platform. A traditional book fails
            miserably to capture the complexity of modern life, putting it at a
            serious disadvantage when compared to alternative forms of outlets.
            At Digi-Papyrus, we look forward to creating an ecosystem that will
            empower writers and content creators to deliver stronger emotions,
            weave threads of modern lives, and re-engineer the reading to reach
            new heights of experience.{" "}
          </p>
        </div>
      </div>
      <div className="Page3">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${-offset * 100 + 100}%)` }}>
              REFERENCES
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
          <ReferenceCard
            src={nirjal}
            statement="Such a nice app had a great experience using it"
            name="Nirjal Bhurtel"
            post="Nirjal"
          />
        </div>
      </div>
      <div className="Page4">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${offset * 100 - 30}%)` }}>
              OUR TEAM
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <div>
            <p>
              I want you close your eyes and think about the last book you have
              read. Now imagine how would that reading experience be different
              if it were designed in a web-based platform. A traditional book
              fails miserably to capture the complexity of modern life, putting
              it at a serious disadvantage when compared to alternative forms of
              outlets. At Digi-Papyrus, we look forward to creating an ecosystem
              that will empower writers and content creators to deliver stronger
              emotions, weave threads of modern lives, and re-engineer the
              reading to reach new heights of experience.{" "}
            </p>
            <img src={team} />
          </div>
        </div>
        </div>
        <div className="Page5">
        <Parallax
          renderLayer={(offset) => (
            <h1 style={{ transform: `translatex(${-offset * 100 + 100}%)` }}>
              CO-FOUNDERS
            </h1>
          )}
        />
        <div className="ParallaxDiv">
          <div className="Mahip">
          <img src={mahip} />
          <h6>Mahip Adhikari</h6>
          <p>
          Mahip Adhikari is a student of Computer Engineering at Kathmandu University. 
          With more than 3+ experience with the software designing framework among the group, 
          Mahip supports important backend skills for the smooth operation of the DigiPapyrus. 
          Mahip is an avid hiker, and interested in learning multiple programming languages. He can also be reached at 
          mahip.adhikari4@gmail.com.
          </p>
          </div>
          <div className="Nigam">
          <img src={nigam} />
          <h6>Nigam Niraula</h6>
          <p>
          Nigam Niraula is an undergraduate at Kathmandu University, Nepal.  
          A computer engineering student, he brings in his passion for coding 
          and skill as a full stack developer at DigiPapyrus. In his free time, he enjoys reading books- his favorite being “Think like a monk”.
           He is a chess player and online gamer, and GTA San Andreas he is already a millionaire. And he can be reached at nigam21nir@gmail.com
          </p>
            </div>
          <div className="Nirjal">
          <img src={nirjal} />
           <h6>Nirjal Bhurtel</h6>
           <p>Nirjal Bhurtel is a student at Kathmandu University pursuing Computer Engineering. 
             Full of energy,  Nirjal believes in changing the world by working on innovative ideas, 
             and to that end he has been involved in DigiPapyrus, where he brings his skill as a full stack developer.
              Outside DigiPapyrus, Nirjal is a frequent at entrepreneurship workshops and an 
             avid chess player 
             He can be reached at sunnynirjal@gmail.com </p>
          </div>
         
        </div>
        </div>
      </div>
    
  );
}
