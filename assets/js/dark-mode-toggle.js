// JavaScript to toggle dark and light modes
// (function() {
//   const toggleButton = document.getElementById('dark-mode-toggle');
//   toggleButton.textContent = 'Toggle Dark Mode';

//   const body = document.body;

//   // Check localStorage for user preference
//   const savedMode = localStorage.getItem('theme');
//   if (savedMode) {
//     body.classList.toggle('dark-mode', savedMode === 'dark');
//     console.log('Dark mode applied from localStorage:', savedMode === 'dark');
//   }

//   // Add event listener to toggle button
//   toggleButton.addEventListener('click', () => {
//     const isDarkMode = body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
//     console.log('Dark mode toggled:', isDarkMode);
//   });
// })();

(function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Helper to set icon
  function setIcon(isDark) {
    toggleButton.textContent = isDark ? '\u2600' : '☽'; //☀
  }

  // Check localStorage for user preference
  const savedMode = localStorage.getItem('theme');
  const isDark = savedMode === 'dark' || (savedMode === null && body.classList.contains('dark-mode'));
  body.classList.toggle('dark-mode', isDark);
  setIcon(isDark);

  // Add event listener to toggle button
  toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    setIcon(isDarkMode);
  });
})();