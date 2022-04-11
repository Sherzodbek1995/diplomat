import AOS from "aos";
import 'aos/dist/aos.css'

export default ({ app }, inject) => {
    app.AOS = new AOS.init({
        disable: window.innerWidth < 400,
    })
}