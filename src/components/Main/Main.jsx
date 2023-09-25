import React ,{ useEffect, useState, useRef, useLayoutEffect } from 'react';
import './Main.css';
import { IoRestaurant,IoMenuOutline, IoLogoInstagram, IoClose } from 'react-icons/io5'
import {AiOutlineFacebook } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from '../Modal/Modal';
import Header from '../header/Header';
const Main = () => {

    //open hamburger overlay menu
    const [menuOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(current => !current);
    };
    
    //open reservation modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openReserve = () => {
        setIsModalVisible(current => !current);    
    }

    //top navbar color and transition on scroll
    const [navColor, setNavColor] = useState("transparent");
    const [textSize, setTextSize] = useState("55px")
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#434745") : setNavColor("transparent");
        window.scrollY > 10 ? setTextSize("40px") : setTextSize("55px");
   }
   useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
            window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);

    //gsap animation
    const title = useRef(null);
    const subtitle = useRef(null);
 
    useEffect(() => {
       
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {

        const tlOne = gsap.timeline();

            tlOne.from(title.current, {
                duration: 1.5,
                opacity: 0,
                x: -1600,
                ease: "sine.out"
            });

            tlOne.from(subtitle.current, {
                duration: 1.5,
                opacity: 0,
                x: -1600,
                ease: "sine.out"
            }, "<");
        

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: ".subtitle",
                start: "bottom 10%",
                end: "+=320",
                scrub: 2,
                toggleActions: "play none none reverse"
            }
        });
            tl.from(".overlap-picture", {
                opacity: 0,
                duration: 2.2,
                delay: 0.5,
                scale: 0,
                ease: "sine.out",
            });

            tl.from(".middle-text", {
                ease: "sine.out",
                x: -1200,
                duration: 1.5,
                delay: 2,
                opacity: 0
            },"+=2");

            gsap.to("#pic1", {
                y:"-=20",
                ease: "sine.inOut",
                repeat:-1,
                duration:4,
                yoyo: true,
                repeatDelay: 0,
            });

            gsap.to("#pic2", {
                y:"+=15",
                ease: "sine.inOut",
                repeat:-1,
                duration:4,
                yoyo: true,
                repeatDelay: 0,
            });

            gsap.to("#pic3", {
                y:"+=25",
                ease: "sine.inOut",
                repeat:-1,
                duration:5,
                yoyo: true,
                repeatDelay: 0,
         });

            gsap.from(".bottom-text", {
                scrollTrigger: {
                    trigger: ".middle-text",
                    start:"top",
                    end: "top 50%",
                    duration: 1.5,
                    ease: "sine.out",
                    scrub: 1
            },
                opacity: 0,
                x: 1200,
            });
        })
    
    return () => ctx.revert();
   
    }, []);
//overlay menu GSAP animation 
const mouse = useRef();
const menuRef = useRef(null);
const reserveRef = useRef(null);
const logoRef = useRef(null);

useLayoutEffect(() => {
    const ctx = gsap.context(() => {

        const timeline = gsap.timeline();

        timeline.from(menuRef.current, {
            duration: 0.5,
            opacity: 0,
            x: -1600,
            ease: "sine.out",
        }, menuRef);

        timeline.from(".overlay a", {
            duration: 0.5,
            delay: 0.3,
            opacity: 0,
            stagger: 0.2,
            ease: "power1.in",
            y: 0,       
        });

       timeline.from(reserveRef.current, {
            duration: 0.5,
            delay: 0.2,
            opacity: 0,
            ease: "power1.in",
            y: 0,
        });

        timeline.from(logoRef.current, {
            duration: 0.3,
            delay: 0.1,
            opacity: 0,
            ease: "power1.in",
            x: -1600,
        });  
    })

    return () => ctx.revert();

}, [menuOpen]);

return ( 
    <section id="main">
        <div 
            className="nav-container" 
            style={{
                backgroundColor: navColor,
                transition: "1s",
             }}
             > 
            <button ><IoRestaurant /></button>
            
           <Header />
           
</div>

                   
     <div className="sidebar"> 
         <hr className="toggle-line"></hr>
         <span>L</span>
         <span>A</span>
         <span>D</span>
         <span>U</span>
         <span>R</span>
         <span>É</span>
         <span>E</span>
        <span className="social"><a href="https://www.facebook.com/MaisonLaduree/"><AiOutlineFacebook /></a></span>
        <span className="social"><a href="https://www.instagram.com/maisonladuree/"><IoLogoInstagram /></a></span>
     </div>
     <p className="title" ref={title}>A Taste Of History </p>
     <p className="subtitle" ref={subtitle}> Experience a classic  <br /> French restaurant </p>
     <div className="main-background">
    
     <div className="main-image" id="image10" />  
                <div className="main-image" id="image9" />  
                <div className="main-image" id="image8" />  
                <div className="main-image" id="image7" />  
                <div className="main-image" id="image6" />
                <div className="main-image" id="image5" />
                <div className="main-image" id="image4" />
                <div className="main-image" id="image3" />
                <div className="main-image" id="image2" />
                <div className="main-image" id="image1" />

  </div>

           
                {isModalVisible && (
                <Modal onModalClose={() => setIsModalVisible(false)}>
                    <Modal.Header></Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                </Modal>
                )}   
            <div className="mouse-scroll" ref={mouse}>
            </div>
            <div className="mouse">
                <a href="#intro-section"><span></span></a>
            </div>      
        </section>    
    )
}

export default Main;