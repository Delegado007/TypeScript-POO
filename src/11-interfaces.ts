interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isDisconnect(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
//   connect: function (): void {
//     //code
//   }
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string,
  ) { }
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isDisconnect(): boolean {
    //code
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) { }
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isDisconnect(): boolean {
    //code
    return true;
  }
}
