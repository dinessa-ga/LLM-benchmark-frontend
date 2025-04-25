//1
// ...existing code...
//3

// ...existing code...
export class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("render() debe ser implementado por las subclases.");
  }
}

// ...existing code...
export class SalesReport extends ReportCard {
  render() {
    return `SalesReport: ${JSON.stringify(this.data)}`;
  }
}

// ...existing code...
export class CostsReport extends ReportCard {
  render() {
    return `CostsReport: ${JSON.stringify(this.data)}`;
  }
}

// ...existing code...
export class PerformanceReport extends ReportCard {
  render() {
    return `PerformanceReport: ${JSON.stringify(this.data)}`;
  }
}

// ...existing code...
export class ReportFactory {
  static createReportCard(type, data) {
    switch (type) {
      case 'sales':
        return new SalesReport(data);
      case 'costs':
        return new CostsReport(data);
      case 'performance':
        return new PerformanceReport(data);
      default:
        throw new Error('Tipo de reporte no soportado');
    }
  }
}
// ...existing code...
