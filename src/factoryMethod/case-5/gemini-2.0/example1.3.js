//3
// report.js

class ReportCard {
  constructor(data) {
      this.data = data;
  }

  render() {
      throw new Error("Method 'render()' must be implemented in subclasses.");
  }
}

class SalesReport extends ReportCard {
  constructor(data) {
      super(data);
  }

  render() {
      const salesItems = this.data.sales.map(sale => `<li>Product: ${sale.product}, Amount: $${sale.amount}</li>`).join('');
      const totalSales = this.data.sales.reduce((sum, sale) => sum + sale.amount, 0);

      return `
          <h2>Sales Report</h2>
          <p>Total Sales: $${totalSales}</p>
          <ul>${salesItems}</ul>
      `;
  }
}

class CostsReport extends ReportCard {
  constructor(data) {
      super(data);
  }

  render() {
      const costItems = this.data.costs.map(cost => `<li>Description: ${cost.description}, Amount: $${cost.amount}</li>`).join('');
      const totalCosts = this.data.costs.reduce((sum, cost) => sum + cost.amount, 0);

      return `
          <h2>Costs Report</h2>
          <p>Total Costs: $${totalCosts}</p>
          <ul>${costItems}</ul>
      `;
  }
}

class PerformanceReport extends ReportCard {
  constructor(data) {
      super(data);
  }

  render() {
      const topPerformers = this.data.employees
          .sort((a, b) => b.performance - a.performance)
          .slice(0, 3) // Get the top 3 performers
          .map(employee => `<li>${employee.name} - Performance: ${employee.performance}</li>`)
          .join('');

      return `
          <h2>Performance Report</h2>
          <h3>Top Performers:</h3>
          <ul>${topPerformers}</ul>
      `;
  }
}

class ReportFactory {
  static createReportCard(type, data) {
      switch (type) {
          case 'sales':
              return new SalesReport(data);
          case 'costs':
              return new CostsReport(data);
          case 'performance':
              return new PerformanceReport(data);
          default:
              throw new Error(`Invalid report type: ${type}`);
      }
  }
}

export { ReportCard, SalesReport, CostsReport, PerformanceReport, ReportFactory };