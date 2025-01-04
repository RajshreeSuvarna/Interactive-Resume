
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.list'); // Section list items
    const sections = document.querySelectorAll('.sec'); // All sections
    const sectionHead = document.querySelector('h1'); // The Top Heading

    // Initially hiding all sections
    sections.forEach(section => section.hidden = false);

    // Adding click event listeners to each list item
    listItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Showing the corresponding section
            sections[index].hidden = false;

            // Inorder to smoothly scroll to the section
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adding functionality to "Go back" buttons
    const backButtons = document.querySelectorAll('.sec .back');
    backButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Smoothly scroll back to the section list (top of the page)
            sectionHead.scrollIntoView({ behavior: 'smooth'});
        });
    });
});