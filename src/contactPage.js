
export function contactPage() {
    const contentDiv = document.getElementById('content');
    const htmlContent = `
    <div id="Contact" class="tab-content">
    <h2>Contact Us</h2>
    <form id="contactForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" required></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
    `;
    contentDiv.innerHTML = htmlContent;
}

