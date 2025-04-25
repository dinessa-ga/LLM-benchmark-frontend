//1
// report.js

class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Método render() debe ser implementado en las subclases.");
  }
}

class SalesReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    let totalSales = 0;
    for (const sale of this.data.sales) {
      totalSales += sale.amount;
    }

    return `
      <h2>Informe de Ventas</h2>
      <p>Total de Ventas: $${totalSales}</p>
      <ul>
        ${this.data.sales.map(sale => `<li>Producto: ${sale.product}, Cantidad: ${sale.quantity}, Monto: $${sale.amount}</li>`).join('')}
      </ul>
    `;
  }
}

class CostsReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    let totalCosts = 0;
    for (const cost of this.data.costs) {
      totalCosts += cost.amount;
    }

    return `
      <h2>Informe de Costos</h2>
      <p>Total de Costos: $${totalCosts}</p>
      <ul>
        ${this.data.costs.map(cost => `<li>Descripción: ${cost.description}, Monto: $${cost.amount}</li>`).join('')}
      </ul>
    `;
  }
}

class PerformanceReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    const averageRating = this.data.ratings.reduce((sum, rating) => sum + rating, 0) / this.data.ratings.length;
    const topPerformers = this.data.employees.filter(employee => employee.performance > 8);

    return `
      <h2>Informe de Rendimiento</h2>
      <p>Calificación Promedio: ${averageRating.toFixed(2)}</p>
      <h3>Mejores Empleados:</h3>
      <ul>
        ${topPerformers.map(employee => `<li>Nombre: ${employee.name}, Rendimiento: ${employee.performance}</li>`).join('')}
      </ul>
    `;
  }
}


class ReportFactory {
  static createReportCard(type, data) {
    switch (type) {
      case "sales":
        return new SalesReport(data);
      case "costs":
        return new CostsReport(data);
      case "performance":
        return new PerformanceReport(data);
      default:
        throw new Error(`Tipo de informe desconocido: ${type}`);
    }
  }
}

export { ReportCard, SalesReport, CostsReport, PerformanceReport, ReportFactory };
