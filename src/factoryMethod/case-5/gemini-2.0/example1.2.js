// 2
// report.js
class ReportCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("Method render() must be implemented in subclasses.");
  }
}

class SalesReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    // Example rendering logic for sales report
    return `
      <h1>Sales Report</h1>
      <p>Total Sales: ${this.data.totalSales}</p>
      <ul>
        ${this.data.sales.map(sale => `<li>Product: ${sale.product}, Amount: ${sale.amount}</li>`).join('')}
      </ul>
    `;
  }
}

class CostsReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    // Example rendering logic for costs report
    return `
      <h1>Costs Report</h1>
      <p>Total Costs: ${this.data.totalCosts}</p>
      <ul>
        ${this.data.costs.map(cost => `<li>Description: ${cost.description}, Amount: ${cost.amount}</li>`).join('')}
      </ul>
    `;
  }
}

class PerformanceReport extends ReportCard {
  constructor(data) {
    super(data);
  }

  render() {
    // Example rendering logic for performance report
    return `
      <h1>Performance Report</h1>
      <p>Average Rating: ${this.data.averageRating}</p>
      <ul>
        ${this.data.metrics.map(metric => `<li>Metric: ${metric.name}, Value: ${metric.value}</li>`).join('')}
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
        throw new Error(`Invalid report type: ${type}`);
    }
  }
}

export { ReportCard, SalesReport, CostsReport, PerformanceReport, ReportFactory };