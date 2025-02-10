function openTab(event, tabId) {
    // Hide all tab contents and remove 'active' class from them
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    // Remove 'active' class from all tab buttons
    let tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab content and add 'active' class to the button
    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Show the first tab by default on page load
document.getElementById('content1').style.display = 'block';
document.getElementById('content1').classList.add('active');
