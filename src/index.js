import { InitialPageLoad } from "./initialPage.js";
import { menuLoad } from "./Menu.js";
import { contactPage } from "./contactPage.js";

let page = "Home";
InitialPageLoad();
 // Event listener
 document.querySelectorAll('.homeTab').forEach(button => {
    button.addEventListener('click', function() {
        page = this.textContent;
        switch (page) {
            case "Home":
                InitialPageLoad();
                break;
            case "Menu":
                menuLoad();
                break;
            case "Contact":
                contactPage();
                break;
            default:
                break;
        }
    });
});
