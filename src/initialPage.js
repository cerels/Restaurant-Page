
export function InitialPageLoad() {
    const contentDiv = document.getElementById('content');
    const htmlContent = `
        <img
            src="restaurant.jpg"
            alt="Restaurant Image"
            width="30%"
            height="auto"
        />
        <h1>Welcome to Our Restaurant</h1>
        <p>
            Experience the finest dining at our exquisite restaurant where culinary
            delights meet exceptional service. Indulge in a diverse menu crafted
            from the freshest ingredients, and let our warm, inviting ambiance
            enhance your dining experience. Join us for a memorable meal that will
            leave you coming back for more.
        </p>
    `;
    contentDiv.innerHTML = htmlContent;
}

