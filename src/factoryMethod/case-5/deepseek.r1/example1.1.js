//1
// Definición de la clase base ReportCard
export class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Método render no implementado');
  }
}

// Subclases específicas de ReportCard
export class SalesReport extends ReportCard {
  render() {
    console.log(`Generando SalesReport con datos: ${JSON.stringify(this.data)}`);
  }
}

export class CostsReport extends ReportCard {
  render() {
    console.log(`Generando CostsReport con datos: ${JSON.stringify(this.data)}`);
  }
}

export class PerformanceReport extends ReportCard {
  render() {
    console.log(`Generando PerformanceReport con datos: ${JSON.stringify(this.data)}`);
  }
}

// Factory para crear instancias de ReportCard
export class ReportFactory {
  static createReportCard(type, data) {
    switch (type.toLowerCase()) {
      case 'sales':
        return new SalesReport(data);
      case 'costs':
        return new CostsReport(data);
      case 'performance':
        return new PerformanceReport(data);
      default:
        throw new Error(`Tipo de reporte no válido: ${type}`);
    }
  }
}

