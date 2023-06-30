import { pos } from "../../index.js";

document.getElementById('map').innerHTML = `
<iframe
width="100%"
height="600"
frameborder="0"
scrolling="no"
marginheight="0"
marginwidth="0"

src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${pos.lat},%20${pos.long}+(yo)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
></iframe>
`;
