import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly name = signal('Aaron Stupf');
  protected readonly title = signal('Full Stack Developer');
  protected readonly description = signal('👋 Hello! I\'m a passionate developer who loves creating amazing web applications. 💻 I specialize in building modern, responsive websites using the latest technologies. 🚀 Let\'s build something great together!');
  protected readonly email = signal('📧 aaron@example.com');
  protected readonly location = signal('📍 Germany');
}
