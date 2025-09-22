// Add new taskbar item dynamically
function addTaskbarItem(name) {
  const navLinks = document.getElementById('navLinks');

  const link = document.createElement('a');
  link.href = "#";
  link.textContent = name;

  // Optional: display a message when clicked
  link.addEventListener('click', () => {
    const output = document.getElementById('output');
    output.innerHTML = `<p>You clicked on <strong>${name}</strong></p>`;
  });

  navLinks.appendChild(link);
}
