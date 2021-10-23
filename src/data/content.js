import behance from '../assets/behance.webp'
import dribbble from '../assets/dribbble.webp'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import icons from '../assets/icons.webp'
import contact from '../assets/contact.webp'

const data = {
    "home":{
        "title":{
            "item1":"I’m a ",
            "item2":"UX/UI",
            "item3":" & ",
            "item4":"Product",
            "item5":" Designer "
        },
        "subtitle":"Building meaningful user experiences one product at a time",
        "cta1":{
            "label":"My Work",
            "link":"/work"
        },
        "cta2":{
            "label":"Let's Chat",
            "link":"contact"
        },
        "icons":[
            {
                "icon": dribbble,
                "url": "https://dribbble.com/AnushravSinghal"
            },
            {
                "icon": behance,
                "url": "https://www.behance.net/anushravsinghal"
            },
            {
                "icon": linkedin,
                "url": "https://www.linkedin.com/in/anushravsinghal/"
            },
            {
                "icon": instagram,
                "url": "https://www.instagram.com/anushravsinghal/"
            }
        ]
    },
    "about":{
        "title":"About Me",
        "content":`I am Anushrav, a final-year undergrad at VIT University,
                    Vellore. I was entrusted with the position of VP Design at C4 Projects 
                    (a revolutionary EdTech start-up) and have been leading the graphic design 
                    there for 2 years now.
                    I have worked as a design intern for Humourbaba, an e-commerce 
                    platform based in Vellore. I have a fresh take on design concepts 
                    and can deliver good quality content within deadlines.`,
        "subtitle":"Tools I Use",
        "icons":icons
    },
    "contact":{
        "title":"Get in touch!",
        "subtitle":"I'm looking for my next big project.",
        "content":"If you're a company or a fellow designer, I'd love to get in touch and collaborate :)",
        "cta":{
            "link":"mailto:anushrav20@gmail.com",
            "label":"Let's Chat"
        },
        "icon":contact,
        "footer":"Made By Anushrav Singhal"
    }
}
export default data;