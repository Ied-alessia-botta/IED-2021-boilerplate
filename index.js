import Hello from './components/Hello';
import Title from './components/Title';
import Draw from './components/Draw';

function app() {
  document.body.innerHTML = `
  <main>
  ${Title('Ho modificato una cosa')}
  <br/>
  ${Hello}
  <br/>
  ${Draw}
  <main>`;
}

app();
