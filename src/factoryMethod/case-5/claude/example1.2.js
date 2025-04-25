// 2
// ReportCard base class
class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado por las clases hijas");
  }
}

// SalesReport class that extends ReportCard
class SalesReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      === INFORME DE VENTAS ===
      Periodo: ${this.data.period}
      Ventas totales: $${this.data.totalSales.toLocaleString()}
      Productos más vendidos: ${this.data.topProducts.join(', ')}
      Crecimiento: ${this.data.growth}%
    `;
  }
}

// CostsReport class that extends ReportCard
class CostsReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      === INFORME DE COSTOS ===
      Periodo: ${this.data.period}
      Costos fijos: $${this.data.fixedCosts.toLocaleString()}
      Costos variables: $${this.data.variableCosts.toLocaleString()}
      Total de gastos: $${this.data.totalExpenses.toLocaleString()}
    `;
  }
}

// PerformanceReport class that extends ReportCard
class PerformanceReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      === INFORME DE RENDIMIENTO ===
      Periodo: ${this.data.period}
      ROI: ${this.data.roi}%
      Margen de beneficio: ${this.data.profitMargin}%
      KPIs cumplidos: ${this.data.kpisMet} de ${this.data.totalKpis}
    `;
  }
}

// ReportFactory class with factory method
class ReportFactory {
  static createReportCard(type, data) {
    switch (type.toLowerCase()) {
      case 'sales':
        return new SalesReport(data);
      case 'costs':
        return new CostsReport(data);
      case 'performance':
        return new PerformanceReport(data);
      default:
        throw new Error(`Tipo de informe no soportado: ${type}`);
    }
  }
}

// Export all classes using ES modules syntax
export { ReportCard, SalesReport, CostsReport, PerformanceReport, ReportFactory };