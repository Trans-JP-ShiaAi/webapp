import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      h1 {
        font-size: 5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 2rem;
        margin-top: 0;
      }
    `,
  ],
})
export class NotFoundComponent {}