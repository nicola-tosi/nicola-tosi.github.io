// JavaScript to toggle dark and light modes
(function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.textContent = 'Toggle Dark Mode';

  const body = document.body;

  // Check localStorage for user preference
  const savedMode = localStorage.getItem('theme');
  if (savedMode) {
    body.classList.toggle('dark-mode', savedMode === 'dark');
    console.log('Dark mode applied from localStorage:', savedMode === 'dark');
  }

  // Add event listener to toggle button
  toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log('Dark mode toggled:', isDarkMode);
  });
})();
