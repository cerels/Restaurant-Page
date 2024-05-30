
export function menuLoad() {
    const contentDiv = document.getElementById('content');
    const htmlContent = `
    <h1>Restaurant Menu</h1>
    <div class="tabs">
        <button class="tab-button" onclick="openTab(event, 'Appetizers')">Appetizers</button>
        <button class="tab-button" onclick="openTab(event, 'MainCourses')">Main Courses</button>
        <button class="tab-button" onclick="openTab(event, 'Desserts')">Desserts</button>
        <button class="tab-button" onclick="openTab(event, 'Beverages')">Beverages</button>
    </div>

    <div id="Appetizers" class="tab-content">
        <h2>Appetizers</h2>
        <ul>
            <li>Spring Rolls - $5.99</li>
            <li>Garlic Bread - $3.99</li>
            <li>Bruschetta - $6.99</li>
        </ul>
    </div>

    <div id="MainCourses" class="tab-content">
        <h2>Main Courses</h2>
        <ul>
            <li>Grilled Chicken - $12.99</li>
            <li>Spaghetti Carbonara - $10.99</li>
            <li>Vegetarian Pizza - $11.99</li>
        </ul>
    </div>

    <div id="Desserts" class="tab-content">
        <h2>Desserts</h2>
        <ul>
            <li>Chocolate Cake - $4.99</li>
            <li>Cheesecake - $5.99</li>
            <li>Fruit Salad - $3.99</li>
        </ul>
    </div>

    <div id="Beverages" class="tab-content">
        <h2>Beverages</h2>
        <ul>
            <li>Coffee - $2.99</li>
            <li>Tea - $2.49</li>
            <li>Soda - $1.99</li>
        </ul>
    </div>
    `;
    contentDiv.innerHTML = htmlContent;
}

