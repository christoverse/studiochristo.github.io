// Navigation
const handburgerMenu = document.querySelector(".handburger-menu")
const navList = document.querySelector('.nav-list');

handburgerMenu.addEventListener('click',()=>{
    navList.classList.toggle('show')
})


// GSAP ANIMATION
//animation

//timeline
const hero_tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.hero-section',
        start: "top top",
        end: '+=400px top',
        scrub: 2,
        pin: true
    }
});

document.querySelectorAll('.hero-section .hero-content .title span').
forEach((span, index)=>{
    hero_tl.to(span,
        {
        y: -1500,
        duration: 4,
         ease: "power1.out"
    }, index * 0.1)
})

gsap.to('.hero-section',{
    y: -1200,duration: 4, ease:'power1.out',
     scrollTrigger:{
        trigger:'.hero-section',
        start: "top top",
        end: '+=800px top',
        scrub: 2,
        pin: true
    }
})

// lenis

const lenis = new Lenis({
    duration:3
});

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf)
}

 requestAnimationFrame(raf);

 const horizontalSection = document.querySelector('.horizontal');
gsap.to(horizontalSection,{
 x: () => horizontalSection.scrollWidth * -1,
 xPercent: 100,
    scrollTrigger:{
        trigger: horizontalSection,
        start: "center center",
        end: '+=800px top',
        scrub: 2,
        pin: '#horizontal-scroll',
        invalidateOnRefresh: true
    }
})

const textElements = gsap.utils.toArray('.text')
textElements.forEach(text =>{
        gsap.to(text,{
            backgroundSize: "100%",
            ease:'none',
            scrollTrigger:{
                trigger:text,
                start: 'center 80%',
                end: 'center 30%',
                scrub: true
            }
        })
})

const parallax = document.querySelector('.parallax');
 gsap.to(parallax, {
    backgroundPosition:'0px 100%',
    ease:'none',
    duration: 4,
     scrollTrigger:{
                trigger:parallax,
                start: '-60% top',
                end: 'bottom bottom',
                scrub: true
            }
 })

 //footer

 gsap.to('#footer .flex .wrapper h1',{
    y:0,
    duration: 4,
    scrollTrigger:{
        trigger: '#footer .flex .wrapper h1',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 4 
    }
 })

 //scroll keep in touch

 // Scroll Reveal animation
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2000,
    reset: true
})

//Home
sr.reveal('.featured-text-card',{})
sr.reveal('featured_name',{delay: 100})
sr.reveal('featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

//Project box
sr.reveal('.project-box',{interval: 200})

 const srLeft= ScrollReveal({
    origin:'left',
    distance:'80px', 
    duration: 2000, 
    reset:true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

//About skills
const srRight= ScrollReveal({
    origin:'right',
    distance:'80px', 
    duration: 2000, 
    reset:true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

//Change active link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY=window.scrollY;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId= current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

//contact form
 async function submitForm(event) {
    event.preventDefault();
    const  form = document.getElementById('contactForm')    
    // Get form values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
    // form.reset();
    // Prepare data
    const formData = { name, email, message };

    console.log(" form data = "+JSON.stringify(formData))

    try {
      const response = await fetch('https://contactemail-z8ay.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        document.getElementById('contactForm').reset();
      } else {
        alert("❌ Failed to send message. " + data.message);
      }

    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  }


      // Attach event listener to form

  document.getElementById('contactForm').addEventListener('submit', submitForm);

