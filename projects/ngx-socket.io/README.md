# ngx-socket.io

`ngx-socket.io` is an Angular library that wraps [socket.io](https://socket.io) for easy integration into Angular applications. It provides a simple and efficient way to handle real-time communication between the client and server using WebSockets.

## Features

- Easy integration with Socket.IO.
- Real-time event handling.
- TypeScript support for better development experience.
- Lightweight and efficient.

## Installation

Install the library using npm:

```bash
npm install ngx-socket.io
```

## Usage

Import the module and configure it in your Angular application:

<!-- 
TODO
```typescript
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket.io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  imports: [SocketIoModule.forRoot(config)],
  declarations: [],
  bootstrap: []
})
export class AppModule {}
```

Use the `Socket` service in your components:

```typescript
import { Component } from '@angular/core';
import { Socket } from 'ngx-socket.io';

@Component({
  selector: 'app-root',
  template: `<h1>Real-time App</h1>`
})
export class AppComponent {
  constructor(private socket: Socket) {
    this.socket.on('message', (data: any) => {
      console.log('Message received:', data);
    });
  }
}
``` -->

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Changelog

| Date       | Changes                |
|------------|------------------------|
| YYYY-MM-DD | Initial release.       |
