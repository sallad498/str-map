document.getElementById('action').addEventListener('click', () => {
  const app = document.getElementById('app');
  app.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
});
